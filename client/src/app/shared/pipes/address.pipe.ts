import { Pipe, PipeTransform } from '@angular/core';
import type { ConfirmationToken } from '@stripe/stripe-js';
import type { ShippingAddress } from '../models/order';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(
    value?: ConfirmationToken['shipping'] | ShippingAddress,
    ...args: unknown[]
  ): unknown {
    if (value && 'address' in value && value.name) {
      const { line1, line2, city, state, country, postal_code } = (
        value as ConfirmationToken['shipping']
      )?.address!;
      return `${value.name}, ${line1}, ${
        line2 ? ', ' + line2 : ''
      }, ${city}, ${state}, ${country}, ${postal_code}`;
    } else if (value && 'line1' in value) {
      const { line1, line2, city, state, country, postalCode } =
        value as ShippingAddress;
      return `${value.name}, ${line1}, ${
        line2 ? ', ' + line2 : ''
      }, ${city}, ${state}, ${country}, ${postalCode}`;
    } else {
      return 'Unknown address';
    }
  }
}
