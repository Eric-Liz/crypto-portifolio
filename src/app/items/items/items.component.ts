import { EditItemModalComponent } from './../../shared/components/edit-item-modal/edit-item-modal.component';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { NewItemModalComponent } from 'src/app/shared/components/new-item-modal/new-item-modal.component';
import { Binance } from './../model/binance';
import { Item } from './../model/item';
import { ItemsService } from './../services/items.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit,AfterViewInit {
  dataSource = new MatTableDataSource<Item>();
  items$:Observable <Item[]>;
  displayedColumns=['id','name','price','quantity','category','actions'];

  constructor(private itemsService:ItemsService , public dialog: MatDialog) {

    this.items$=this.itemsService.list()
    .pipe(
      catchError(error=>{
        this.onError('Error to load items.');
      return of([])
      })
      );
   }
  ngAfterViewInit(): void {
  }
   onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  openNewItemModal(){
    this.dialog.open(NewItemModalComponent, {
      width: '300px',
    })
  }
  openEditItemModal(item:Item){
    this.dialog.open(EditItemModalComponent, {
      width: '300px',
      data: item
    })
  }
  delete(item:Item){
    this.itemsService.deleteItem(item).subscribe(()=>{
      console.log('tst')
      this.itemsService.reloadComponent();
    })
  }
  ngOnInit(): void {
  }

}
