import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
    data:{title : 'Altrooist' } 
  },
  {
    path:'product/:prodId',
    component:ProductDetailComponent,
    pathMatch:'full',
    data:{title : 'Altrooist - Product Details' } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
