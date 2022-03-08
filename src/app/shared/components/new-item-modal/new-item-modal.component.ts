import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/items/model/item';
import { ItemsService } from 'src/app/items/services/items.service';

@Component({
  selector: 'app-new-item-modal',
  templateUrl: './new-item-modal.component.html',
  styleUrls: ['./new-item-modal.component.scss']
})

export class NewItemModalComponent implements OnInit {
  item:Item = {
    name:'',
    price:0,
    category:'',
    quantity:0
  }
  constructor(private itemsService:ItemsService) {

  }
  ngOnInit(): void {

  }
  createNewItem(){
    this.itemsService.insertNewItem(this.item).subscribe(()=>{
      this.itemsService.reloadComponent();
    })
  }
}
