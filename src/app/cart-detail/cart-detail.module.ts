import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartDetailRoutingModule } from './cart-detail-routing.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CartListComponent, CartCheckoutComponent],
  imports: [
    CommonModule,
    CartDetailRoutingModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CartDetailModule { }
