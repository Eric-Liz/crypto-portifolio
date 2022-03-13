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

  currencies!: Observable<Currency[]>;
  displayedColumns=[,'name','price','quantity','category','actions'];

  constructor(private currencyService:CurrencyService) {
   this.currencies

   }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
