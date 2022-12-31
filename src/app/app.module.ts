import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { ProductItemComponent } from './product/product-item/product-item.component';

import { ProductService } from './product/product.service';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HealthCheckerComponent } from './health-checker/health-checker.component';
import { HealthCheckerService } from './health-checker/health-checker.service';
import { ProductItemNewComponent } from './product/product-item-new/product-item-new.component';

import { FormsModule } from '@angular/forms';
import { ProductViewComponent } from './product/product-view/product-view.component';

import { MatSlideToggleModule } from '@angular/material';
import { MatToolbarModule} from '@angular/material';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ProductReviewsViewComponent } from './product/product-reviews-view/product-reviews-view.component';
import { ProductReviewItemComponent } from './product/product-review-item/product-review-item.component';

import { ScrollingModule } from '@angular/cdk/scrolling';

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
    ProductReviewItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatSlideToggleModule, // https://stackoverflow.com/questions/61079125/mattoolbar-throws-error-when-using-it-with-angular-9
    MatToolbarModule,
    MatCardModule,
    ScrollingModule,
  ],
  providers: [ProductService, HealthCheckerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
