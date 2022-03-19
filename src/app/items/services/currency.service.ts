import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Currency } from './../model/currency';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private readonly API = '/api/currencies';

constructor(private httpClient:HttpClient) { }

list() {
  return this.httpClient.get<Currency[]>(this.API)
  .pipe(
    first(),
    tap(currency =>console.log(currency))
  );

  }
}
