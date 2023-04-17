import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { ProductItemComponent } from './product/product-item/product-item.component';

import { ProductService } from './product/product.service';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HealthCheckerComponent } from './health-checker/health-checker.component';
import { HealthCheckerService } from './health-checker/health-checker.service';
import { ProductItemNewComponent } from './product/product-item-new/product-item-new.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductViewComponent } from './product/product-view/product-view.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { ProductReviewsViewComponent } from './product/product-reviews-view/product-reviews-view.component';
import { ProductReviewItemComponent } from './product/product-review-item/product-review-item.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { ShoppingCartViewComponent } from './shopping-cart/shopping-cart-view/shopping-cart-view.component';
import { ProductCartItemComponent } from './shopping-cart/product-cart-item/product-cart-item.component';
import { DialogAddedProductComponent } from './shopping-cart/dialog-added-product/dialog-added-product.component';
import { StoreModule } from '@ngrx/store';

import { shoppingCartReducer } from './store/reducers/shopping-cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingCartEffects } from './store/effects/shopping-cart.effects';
import { LoginViewComponent } from './login/login-view/login-view.component';
import { BearertokenInterceptorService } from './services/bearertoken-interceptor.service';
import { UserConfigViewComponent } from './user/user-config-view/user-config-view.component';
import { SearchProductComponent } from './search/search-product/search-product.component';
import { ProductItemSquareComponent } from './product/product-item-square/product-item-square.component';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    ProductItemComponent,
    ProductListComponent,
    HealthCheckerComponent,
    ProductItemNewComponent,
    ProductViewComponent,
    ProductReviewsViewComponent,
    ProductReviewItemComponent,
    ShoppingCartViewComponent,
    ProductCartItemComponent,
    DialogAddedProductComponent,
    LoginViewComponent,
    UserConfigViewComponent,
    SearchProductComponent,
    ProductItemSquareComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatSlideToggleModule, // https://stackoverflow.com/questions/61079125/mattoolbar-throws-error-when-using-it-with-angular-9
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    ScrollingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      shoppingCart: shoppingCartReducer, // TODO: se puede empaquetar todo
    }, {}),
    EffectsModule.forRoot([ShoppingCartEffects]),
  ],
  providers: [ProductService, HealthCheckerService, { provide: HTTP_INTERCEPTORS, useClass: BearertokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
