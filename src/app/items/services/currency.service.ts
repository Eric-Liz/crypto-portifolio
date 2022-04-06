import { Binance } from './../model/binance';
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
  private readonly BINANCEAPI = 'https://api.binance.com/api/v3/avgPrice?symbol=';
  constructor(private httpClient:HttpClient,private router:Router) { }

  list() {
  return this.httpClient.get<Currency[]>(this.API)
  .pipe(
    first(),
    tap(currency =>console.log(currency))
  );
  }
  getCurrenciesPrice(symbol:String){
    return this.httpClient.get<Binance>(`${this.BINANCEAPI}${symbol}USDT`)
    .pipe(
      first(),
      tap(items =>console.log(items))
      )
  }
  getUsedCurrencies(){
    return this.httpClient.get<Currency[]>(`${this.API}/symbols`)
    .pipe(
      first(),
      tap(items =>console.log(items))
      )
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
