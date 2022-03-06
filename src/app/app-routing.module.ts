import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SuccessOrderComponent } from './pages/success-order/success-order.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductPageComponent},
  {path: 'cart', component: CartComponent},
  {path: 'success/:user/:orderNumber', component: SuccessOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
