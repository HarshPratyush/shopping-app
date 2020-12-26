import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetails } from 'src/app/models/ProductDetails';
import { ProdServiceService } from '../services/api/prod-service.service';

@Component({
  selector: 'altrooist-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productDetails:ProductDetails={};
  similarProdcut:ProductDetails[]=[];
  prodId;
  constructor(private router:Router,private productService:ProdServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.prodId = params.prodId;
     this.getSelectedProduct(this.prodId);
     this.getSimilarProduct(this.prodId);
      }
      );
  }

  productRouting(prod:ProductDetails){
    this.router.navigate(["/product",prod.price])
  }

  getSimilarProduct(prodId){
    this.productService.getSimilarProduct(prodId).then(d=>{
      this.similarProdcut = d;
    });
  }
    getSelectedProduct(prodId){
      this.productService.getSelectedProductData(prodId).then(d=>{
        this.productDetails = d;
      })
    }

}
