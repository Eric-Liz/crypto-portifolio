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


  constructor(private itemsService:ItemsService) {

  }
  symbols: Select[] = [
    {value: 'adausdt', viewValue: 'Cardano'},
    {value: 'btcusdt', viewValue: 'Bitcoin'},
    {value: 'ethusd', viewValue: 'Ethereum'},
    {value: 'adausdt', viewValue: 'Cardano'},
    {value: 'btcusdt', viewValue: 'Bitcoin'},
    {value: 'ethusd', viewValue: 'Ethereum'},
    {value: 'adausdt', viewValue: 'Cardano'},
    {value: 'btcusdt', viewValue: 'Bitcoin'},
    {value: 'ethusd', viewValue: 'Ethereum'},
  ];
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
