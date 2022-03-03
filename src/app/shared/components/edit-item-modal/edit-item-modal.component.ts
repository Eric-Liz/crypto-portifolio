import { Item } from 'src/app/items/model/item';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Item) { }

  ngOnInit(): void {
  }

}
