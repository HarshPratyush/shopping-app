import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Oauth2Component } from './common/oauth2/oauth2.component';


const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./static/static.module').then(m => m.StaticModule)
  },
  {
    path:'ouath2/redirect',
    component: Oauth2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
