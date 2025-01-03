import { Pipe, PipeTransform } from '@angular/core';
import type { ConfirmationToken } from '@stripe/stripe-js';

@Pipe({
  name: 'payment',
})
export class PaymentPipe implements PipeTransform {
  transform(
    value?: ConfirmationToken['payment_method_preview'],
    ...args: unknown[]
  ): unknown {
    if (value?.card) {
      const { brand, last4, exp_month, exp_year } = value.card;
      return `${brand.toUpperCase()}, **** **** **** ${last4}, ${exp_month}/${exp_year}`;
    } else {
      return 'Unknown payment method';
    }
  }
}