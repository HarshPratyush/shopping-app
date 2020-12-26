import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [HomeComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    StaticRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class StaticModule { }
