import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ShoppingCartViewComponent } from './shopping-cart/shopping-cart-view/shopping-cart-view.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductViewComponent },
  { path: 'shopping-cart', component: ShoppingCartViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
