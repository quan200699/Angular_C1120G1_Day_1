import {Component, OnInit} from '@angular/core';
import {Product} from '../../interface/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title = 'Create new product';
  product: Product = {
    name: 'Quan',
    price: 15000
  };
  products: Product[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  // createProduct(name, price) {
  //   this.product = {
  //     name,
  //     price
  //   };
  //   this.products.push(this.product);
  //   console.log(this.products);
  // }
  createProduct() {
    this.products.push(this.product);
    this.product = {};
  }
}
