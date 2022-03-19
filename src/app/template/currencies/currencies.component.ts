import { NewCurrencyModalComponent } from './../../shared/components/new-currency-modal/new-currency-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Currency } from './../../items/model/currency';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/items/services/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit,AfterViewInit {

  currencies: Observable<Currency[]>;
  displayedColumns=['symbol','currencyName'];

  constructor(private currencyService:CurrencyService,public dialog: MatDialog) {
   this.currencies = this.currencyService.list();

   }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }
  openNewCurrencyModal(){
    this.dialog.open(NewCurrencyModalComponent, {
      width: '300px',
    })
  }

}
