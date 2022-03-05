import { Binance } from './../model/binance';
import { Item } from './../model/item';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private readonly API = 'api/items';
  private readonly BINANCEAPI = 'https://api.binance.com/api/v3/ticker/price';


  constructor(private httpClient:HttpClient) { }

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
    return this.httpClient.delete<Item>(`${this.API}/${item.id}`)
  }
  listBtc(){
    return this.httpClient.get<Binance[]>(this.BINANCEAPI)
    .pipe(
      first(),
      tap(items =>console.log(items))
      )
  }
}
