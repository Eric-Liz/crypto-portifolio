import { Binance } from "./binance";
import { Item } from "./item";

export interface FullItems {
  // mins:number;
  // price:number;
  // _id:string;
  // name:string;
  // category:string;
  listBtc: Binance[];
  itemList: Item[];
}
