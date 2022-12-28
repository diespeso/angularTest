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

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    ProductItemComponent,
    ProductListComponent,
    HealthCheckerComponent,
    ProductItemNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService, HealthCheckerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
