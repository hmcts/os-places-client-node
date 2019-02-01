import { Address } from './address'

export class AddressInfoResponse {

  public addresses: Address[] = [];

  constructor (
    public readonly statusCode: number,
    public readonly valid: boolean
  ) {
  }

  public addAll(moreAddresses: Address[]) {
    this.addresses.push(...moreAddresses);
  }
}
