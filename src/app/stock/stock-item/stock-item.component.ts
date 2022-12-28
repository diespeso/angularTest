import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Clock Company', 'TSC', 85, 80);
  }

  handleToggle(event: MouseEvent) {
    console.log('event', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
