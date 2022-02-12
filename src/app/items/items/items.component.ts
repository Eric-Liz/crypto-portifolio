import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Binance } from './../model/binance';
import { Item } from './../model/item';
import { ItemsService } from './../services/items.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit,AfterViewInit {
  dataSource = new MatTableDataSource<Item>();

  items$:Observable <Item[]>;
  btc$:Observable<Binance[]>
  displayedColumns=['_id','name','category','delete'];
  displayedColumns2=['symbol','price'];



  constructor(private itemsService:ItemsService , public dialog: MatDialog) {
    this.items$=this.itemsService.list()
    .pipe(
      catchError(error=>{
        this.onError('Error to load items.');
      return of([])
      })
      );
    this.btc$=this.itemsService.listBtc();
   }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
   onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
