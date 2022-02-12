import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value:string): string {
    switch(value){
      case 'hold':return 'savings';
      case 'swap':return 'currency_exchange';
    }
    return 'savings';
  }

}
