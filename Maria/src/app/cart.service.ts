import { Injectable } from '@angular/core';
import { IPets } from './IPets';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:IPets[]=[];

  constructor() { }
  addToCart(smt:IPets){
    this.items.push(smt)
  }
  getItems(){
    return this.items
  }
  clearCart(){
    this.items=[];
    return this.items
  }
}
