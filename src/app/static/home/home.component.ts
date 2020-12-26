import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetails } from 'src/app/models/ProductDetails';
import { ProdServiceService } from '../services/api/prod-service.service';

@Component({
  selector: 'altrooist-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productDetails:ProductDetails[]=[];
  constructor(private prodService:ProdServiceService,public router:Router) { }

  ngOnInit(): void {
    this.loadProds();
  }

  loadProds(){
    this.prodService.getAllProducts().then(data=>{
      this.productDetails = data;
    })
  }

  productRouting(prod:ProductDetails){
    this.router.navigate(["/product",prod.price])
  }

}
