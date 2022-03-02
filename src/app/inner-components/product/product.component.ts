import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import ProductModel from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  amountInCart:number = 0;

  constructor(private cartService:CartService) { 
    this.product = {
      id: 0,
      name: "",
      price: 0,
      url: "",
      description: ""      
    }
  }

  ngOnInit(): void {
    if(this.product.amountInCart) {
      this.amountInCart = this.product.amountInCart;
    }
  }

  subtract() {
    if (this.amountInCart > 0) {
      this.amountInCart -= 1;
      this.cartService.changeProductAmount(this.product.id, this.amountInCart);
    }
  }

  add(): void {
    this.amountInCart += 1;
    this.cartService.changeProductAmount(this.product.id, this.amountInCart);
  }

  addToCart(): void {
    this.cartService.addProductToCart(this.product, this.amountInCart);
  }

}
