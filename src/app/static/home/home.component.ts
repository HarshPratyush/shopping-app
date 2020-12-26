import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageData } from 'src/app/models/Page';
import { ProductDetails } from 'src/app/models/ProductDetails';
import { ProductType } from 'src/app/models/productType';
import { ProdServiceService } from '../services/api/prod-service.service';
declare var $:any;

@Component({
  selector: 'altrooist-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activePage=0;
  selectedProductType:ProductType={id:null,name:''};
  productTypes:ProductType[]=[];
  productDetails:PageData<ProductDetails> = new PageData();
  constructor(private prodService:ProdServiceService,public router:Router) { }

  ngOnInit(): void {
    this.loadProds();
    this.loadProductType();
    this.handleScroll();
  }

  loadProds(){
    this.prodService.getAllProducts().then(data=>{
      this.productDetails = data;
    })
  }

  loadProductType(){
    this.prodService.getAllProductType().then(data=>{
      this.productTypes= data;
    })
  }

  productRouting(prod:ProductDetails){
    this.router.navigate(["/product",prod.price])
  }

  selectPage(i){
    this.activePage=i;
  }
  prev(){
    this.activePage = this.activePage-1;
  }

  next(){
    this.activePage = this.activePage+1;
  }

  handleScroll(){ 
    let fixmeTop = $('.shop-type').offset().top;       // get initial position of the element

 $(window).scroll(function() {                  // assign scroll event listener
 
     var currentScroll = $(window).scrollTop(); // get current position
 
     if (currentScroll >= fixmeTop) {           // apply position: fixed if you
         $('.shop-type').css({                      // scroll to that element or below it
             position: 'sticky',
             top: '97px',
             left: '0'
         });
     } else {                                   //   apply position: static
         $('.shop-type').css({                      // if you scroll above it
             position: 'static'
         });
     }
 
 });
}

selectProductType(productType){
  this.selectedProductType=productType;
}
}
