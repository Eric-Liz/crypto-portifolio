import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value:string): string {
    switch(value){
      case 'Hold':return 'savings';
      case 'Swap':return 'currency_exchange';
    }
    return 'savings';
  }

}
