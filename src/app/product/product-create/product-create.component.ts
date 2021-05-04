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
  isShowed = false;
  index = 0;

  constructor() {
  }

  ngOnInit() {
  }

  changeStatus() {
    this.isShowed = !this.isShowed;
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

  removeProduct(i: number) {
    this.products.splice(i, 1);
  }

  increaseIndex() {
    this.index++;
  }
}
