import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-added-product',
  templateUrl: './dialog-added-product.component.html',
  styleUrls: ['./dialog-added-product.component.css']
})
export class DialogAddedProductComponent implements OnInit {
  @Input() success: boolean;
  public message: string;

  constructor() { }

  ngOnInit(): void {
    this.message = this.success ? 'Product added to shopping cart' : 'This product is already in the shopping cart';
  }

}
