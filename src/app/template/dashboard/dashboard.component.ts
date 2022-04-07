import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from 'src/app/items/model/currency';
import { CurrencyService } from 'src/app/items/services/currency.service';
import {ChartModule} from 'primeng/chart';


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
  data: any;
  constructor(private currencyService: CurrencyService) {
   // this.list = this.currencyService.getUsedCurrencies();
   this.data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
}
  }

  ngOnInit(): void {}

}
