import { Injectable } from '@angular/core';
import { Traveler } from '@models/traveler';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filtering(travelers: Traveler[], value: string): Traveler[] {
    switch (value) {
      case 'some-payment':
        return travelers.filter((e) => e.payments.length !== 0);
      case 'no-payments':
        return travelers.filter((e) => e.payments.length === 0);
      case 'all':
        return travelers;
      case 'young-men':
        return travelers.filter((e) => e.travelerType.name === 'Hombre Jóven');
      case 'young-women':
        return travelers.filter((e) => e.travelerType.name === 'Mujer Jóven');
      case 'adults':
        return travelers.filter((e) => e.travelerType.name === 'Adulto');
      default:
        return [];
    }
  }
}
