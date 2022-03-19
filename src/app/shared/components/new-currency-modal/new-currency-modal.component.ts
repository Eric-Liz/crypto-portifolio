import { Currency } from './../../../items/model/currency';
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/items/services/currency.service';

@Component({
  selector: 'app-new-currency-modal',
  templateUrl: './new-currency-modal.component.html',
  styleUrls: ['./new-currency-modal.component.scss']
})
export class NewCurrencyModalComponent implements OnInit {
  currency:Currency={
    symbol:'',
    currencyName:''
  }

  constructor(private currencyService:CurrencyService) { }

  ngOnInit(): void {

  }
  createNewCurrency(){
    this.currencyService.insertNewCurrency(this.currency).subscribe(()=>{
      this.currencyService.reloadComponent();
    })
  }
}
