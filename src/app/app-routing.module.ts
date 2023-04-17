import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ShoppingCartViewComponent } from './shopping-cart/shopping-cart-view/shopping-cart-view.component';
import { LoginViewComponent } from './login/login-view/login-view.component';
import { UserConfigViewComponent } from './user/user-config-view/user-config-view.component';
import { SearchProductComponent } from './search/search-product/search-product.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductViewComponent },
  { path: 'shopping-cart', component: ShoppingCartViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'user', component: UserConfigViewComponent },
  { path: 'search', component: SearchProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
