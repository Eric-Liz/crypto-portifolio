import { Binance } from './../model/binance';
import { Item } from './../model/item';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { first, tap } from 'rxjs/operators';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
}
  private readonly API = 'api/items';
  private readonly BINANCEAPI = 'https://api.binance.com/api/v3/ticker/price';


  constructor(private httpClient:HttpClient, private router:Router) { }

  list() {
    return this.httpClient.get<Item[]>(this.API)
    .pipe(
      first(),
      tap(items =>console.log(items))
    );
  }
  insertNewItem(item:Item){
    return this.httpClient.post<Item>(this.API,item)
  }
  editItem(item:Item){
    return this.httpClient.put<Item>(`${this.API}/${item.id}`,item)
  }
  deleteItem(item:Item){

    return this.httpClient.delete<Item>(`${this.API}/${item.id}`,this.httpOptions)
  }
  listBtc(){
    return this.httpClient.get<Binance[]>(this.BINANCEAPI)
    .pipe(
      first(),
      tap(items =>console.log(items))
      )
  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
