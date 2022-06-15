import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IPets } from '../IPets';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  things:IPets[]=[]

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.things=this.cartService.getItems()
  }

}
