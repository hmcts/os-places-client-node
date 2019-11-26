import { Point } from './point'

export class Address {
  constructor (public readonly uprn: string,
               public readonly organisationName: string | undefined,
               public readonly departmentName: string | undefined,
               public readonly poBoxNumber: string | undefined,
               public readonly buildingName: string | undefined,
               public readonly subBuildingName: string | undefined,
               public readonly buildingNumber: number | undefined,
               public readonly thoroughfareName: string | undefined,
               public readonly dependentThoroughfareName: string | undefined,
               public readonly dependentLocality: string | undefined,
               public readonly doubleDependentLocality: string | undefined,
               public readonly postTown: string,
               public readonly postcode: string,
               public readonly postcodeType: string,
               public readonly formattedAddress: string,
               public readonly point: Point,
               public readonly udprn: string | undefined){
  }
}
