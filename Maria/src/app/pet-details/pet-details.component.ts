import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { pets } from '../pets';
import { CartService } from '../cart.service';
import { IPets } from '../IPets';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  pet1:IPets ={} as IPets;
  id:number = 0

  constructor(private route: ActivatedRoute,private cartService:CartService) {}

  addToCart(){
    window.alert("Your pet is coming after you");
    this.cartService.addToCart(this.pet1)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['petId'];
      this.pet1=pets[this.id];
  });

}}
