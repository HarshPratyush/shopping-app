import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/common/app-constants';
import { PageData } from 'src/app/models/Page';
import { ProductDetails } from 'src/app/models/ProductDetails';
import { ProductType } from 'src/app/models/productType';

@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {

  constructor(private http:HttpClient) {}

  getAllProducts():Promise<PageData<ProductDetails>>{
    return this.http.get(AppConstants.GET_ALL_PRODUCT).toPromise() as any;
  }

  getAllProductType():Promise<ProductType[]>{
    return this.http.get(AppConstants.GET_ALL_PRODUCT_TYPE).toPromise() as any;
  }

  getSelectedProductData(prodId):Promise<ProductDetails>{
    return this.http.get(AppConstants.GET_SELECTED_PRODUCT).toPromise() as any;
  }

  getSimilarProduct(prodId):Promise<ProductDetails[]>{
    return this.http.get(AppConstants.GET_SIMILAR_PRODUCT).toPromise() as any;
  }
  

}
