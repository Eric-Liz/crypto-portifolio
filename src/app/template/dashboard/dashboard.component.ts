import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from 'src/app/items/model/currency';
import { CurrencyService } from 'src/app/items/services/currency.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  //list: Observable<Currency[]>;
  list:any[] = [
    {
      "symbol":"BTC",
      "currencyName":"Bitcoin",
      "quantity":0.05,
      "totalSpend":4246.14,
      "actualPrice":3210.55
    },
    {
      "symbol":"ETH",
      "currencyName":"Ethereum",
      "quantity":1.13,
      "totalSpend":3746.27,
      "actualPrice":4537.32
    },
  ];
  constructor(private currencyService: CurrencyService) {
   // this.list = this.currencyService.getUsedCurrencies();
  }

  ngOnInit(): void {}

}
