import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent  {

  product: Product = new Product();

  constructor(private productService: ProductService) { }

  save() {
    this.productService.createProduct(this.product).subscribe(result => {
      console.log('Product created!', result);
    });
  }

}
