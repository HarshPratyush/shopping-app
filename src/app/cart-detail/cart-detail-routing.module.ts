import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { CartListComponent } from './cart-list/cart-list.component';


const routes: Routes = [
  {
    path:'',
    component:CartListComponent,
    pathMatch:'full',
    data:{title : 'Cart Details' } 
  },
  {
    path:'checkout',
    component:CartCheckoutComponent,
    pathMatch:'full',
    data:{title : 'Cart Checkout' } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartDetailRoutingModule { }
