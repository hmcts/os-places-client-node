import * as fs from 'fs'
import * as nock from 'nock'
import * as path from 'path'
import * as request from 'request-promise-native'
import { OSPlacesClient } from '../src'

const mockServer = 'http://localhost'
const osPlacesClient: OSPlacesClient = new OSPlacesClient('APIKEY', request, mockServer)

describe('osPlacesClient lookupByPostcode', () => {
  test('should return valid false if no address found', () => {
      nock(mockServer)
        .get(/\/places\/v1\/addresses\/postcode\?offset=.+&key=.+&postcode=.+/)
        .reply(404, [])

      return osPlacesClient
        .lookupByPostcode('XXXX')
        .then(postcodeResponse => {
          expect(postcodeResponse).toEqual({ addresses: [], httpStatus: 404, valid: false })
        })
    }
  )

  test('should return found addresses', () => {
      nock(mockServer)
        .get(/\/places\/v1\/addresses\/postcode\?offset=0&key=.+&postcode=.+/)
        .reply(200, fs.readFileSync(path.join(__dirname, 'mockLookupByPostcodeResponse_1.json')))
      nock(mockServer)
        .get(/\/places\/v1\/addresses\/postcode\?offset=1&key=.+&postcode=.+/)
        .reply(200, fs.readFileSync(path.join(__dirname, 'mockLookupByPostcodeResponse_2.json')))
      nock(mockServer)
        .get(/\/places\/v1\/addresses\/postcode\?offset=2&key=.+&postcode=.+/)
        .reply(200, fs.readFileSync(path.join(__dirname, 'mockLookupByPostcodeResponse_3.json')))

      return osPlacesClient.lookupByPostcode('1234')
        .then(postcodeResponse => {
          expect(postcodeResponse).toEqual(
            {
              addresses: [
                {
                  buildingName: undefined,
                  buildingNumber: '1',
                  departmentName: undefined,
                  dependentLocality: '',
                  dependentThoroughfareName: undefined,
                  doubleDependentLocality: undefined,
                  formattedAddress: '1, THE ROAD, THE TOWN, 1234',
                  organisationName: undefined,
                  poBoxNumber: undefined,
                  point: { 'coordinates': [492237, 181505], 'type': 'Point' },
                  postTown: 'THE TOWN',
                  postcode: '1234',
                  postcodeType: 'D',
                  subBuildingName: undefined,
                  thoroughfareName: 'THE ROAD',
                  uprn: '100080489735'
                },
                {
                  buildingName: undefined,
                  buildingNumber: '2',
                  departmentName: undefined,
                  dependentLocality: '',
                  dependentThoroughfareName: undefined,
                  doubleDependentLocality: undefined,
                  formattedAddress: '2, THE ROAD, THE TOWN, 1234',
                  organisationName: undefined,
                  poBoxNumber: undefined,
                  point: { 'coordinates': [492237, 181505], 'type': 'Point' },
                  postTown: 'THE TOWN',
                  postcode: '1234',
                  postcodeType: 'D',
                  subBuildingName: undefined,
                  thoroughfareName: 'THE ROAD',
                  uprn: '100080489735'
                },
                {
                  buildingName: undefined,
                  buildingNumber: '3',
                  departmentName: undefined,
                  dependentLocality: '',
                  dependentThoroughfareName: undefined,
                  doubleDependentLocality: undefined,
                  formattedAddress: '3, THE ROAD, THE TOWN, 1234',
                  organisationName: undefined,
                  poBoxNumber: undefined,
                  point: { 'coordinates': [492237, 181505], 'type': 'Point' },
                  postTown: 'THE TOWN',
                  postcode: '1234',
                  postcodeType: 'D',
                  subBuildingName: undefined,
                  thoroughfareName: 'THE ROAD',
                  uprn: '100080489735'
                }
              ],
              httpStatus: 200,
              valid: true
            }
          )
        })
    }
  )

  test('should reject promise if no postcode', () =>
    expect(osPlacesClient.lookupByPostcode('')).rejects.toEqual(new Error('Missing required postcode'))
  )

  test('should reject promise on server error', () => {
    nock(mockServer)
      .get(/.*/)
      .reply(500)
    expect(osPlacesClient.lookupByPostcode('AA1 1AA')).rejects.toEqual(new Error('Error with OS Places service'))
  })
})
