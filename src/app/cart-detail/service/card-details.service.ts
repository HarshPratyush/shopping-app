import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/common/app-constants';
import { CartDetails } from 'src/app/models/cartdetails';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {

  constructor(private http:HttpClient) { }

  getCartDetails():Promise<CartDetails[]>{
    return this.http.get(AppConstants.GET_CART_DETAILS).toPromise() as any;
  }
}
