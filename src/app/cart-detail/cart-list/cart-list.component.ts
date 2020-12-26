import { Component, OnInit } from '@angular/core';
import { CartDetails } from 'src/app/models/cartdetails';
import { CardDetailsService } from '../service/card-details.service';

@Component({
  selector: 'altrooist-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartDetails:CartDetails[]=[];
  constructor(private cartDetailsService:CardDetailsService) { }

  ngOnInit(): void {
    this.getCartDetails();
  }
  getCartDetails(){
    this.cartDetailsService.getCartDetails().then(d=>{
      this.cartDetails=d;
    })
  }
}
