import { Component, OnInit } from '@angular/core';
import ProductModel from 'src/app/models/product';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['../../inner-components/product/product.component.css', './product-page.component.css']
})

export class ProductPageComponent implements OnInit {
  product:ProductModel;
  amountInCart:number = 0;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.product = {
      id: 0,
      name: "",
      price: 0,
      url: "",
      description: ""
    }
   }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.product = this.productService.getSingleProduct(parseInt(params['id']));
    })
  }

  subtract() {
    if (this.amountInCart > 0) {
      this.amountInCart -= 1;
    }
  }

  add(): void {
    this.amountInCart += 1;
  }

  addToCart(): void {

  }



}
