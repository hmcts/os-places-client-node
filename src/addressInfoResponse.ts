import { Address } from './address'

export class AddressInfoResponse {

  public addresses: Address[];

  private readonly httpStatus: number;
  private valid: boolean;

  constructor (httpStatus: number, addresses: Address[] = [], valid: boolean = true) {
    this.valid = valid
    this.addresses = !addresses ? [] : addresses
    this.httpStatus = httpStatus
  }

  public addAll(moreAddresses: Address[]) {
    this.addresses.push(...moreAddresses);
  }

  get statusCode() {
    return this.httpStatus
  }

  get isValid() {
    return this.valid;
  }

  set isValid(valid: boolean) {
    this.valid = valid;
  }
}
