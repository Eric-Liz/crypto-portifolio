import { Router } from '@angular/router';
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

constructor(private httpClient:HttpClient,private router:Router) { }

list() {
  return this.httpClient.get<Currency[]>(this.API)
  .pipe(
    first(),
    tap(currency =>console.log(currency))
  );
  }
  insertNewCurrency(currency:Currency){
    return this.httpClient.post<Currency>(this.API,currency)
  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
