import { Observable } from 'rxjs';
import { Currency } from './../../../items/model/currency';
import { CurrencyService } from 'src/app/items/services/currency.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/items/model/item';
import { ItemsService } from 'src/app/items/services/items.service';
import {Select} from 'src/app/items/model/select';
@Component({
  selector: 'app-new-item-modal',
  templateUrl: './new-item-modal.component.html',
  styleUrls: ['./new-item-modal.component.scss']
})

export class NewItemModalComponent implements OnInit {
  item:Item = {
    name:'',
    price:BigInt(0.0),
    category:'',
    quantity:0
  }
  currencies: Observable<Currency[]>;


  constructor(private itemsService:ItemsService,private currencyService:CurrencyService) {
    this.currencies = this.currencyService.list();
  }
  categories: Select[]=[
    {value:"hold",viewValue:"Hold"},
    {value:"swap",viewValue:"Swap"}
  ]
  ngOnInit(): void {

  }

  createNewItem(){
    this.itemsService.insertNewItem(this.item).subscribe(()=>{
      this.itemsService.reloadComponent();
    })
  }
}
