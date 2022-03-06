import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import {CartProductModel} from 'src/app/models/product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['../product/product.component.css', './cart-product.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CartProductComponent implements OnInit {
  @Input() product: CartProductModel;
  @Input() atCart: boolean;
  amountInCart:number = 0;

  constructor(private cartService:CartService) { 
    this.product = {
      id: 0,
      name: "",
      price: 0,
      url: "",
      description: "",
      indexInCart: 0,
    }

    this.atCart = false;
  }

  ngOnInit(): void {
    this.amountInCart = (this.product?.amountInCart || 0);
  }

  subtract():void {
    if (this.amountInCart > 1) {
      this.amountInCart -= 1;
      console.log("called subtract")
      this.cartService.changeProductAmount(this.product.indexInCart, this.amountInCart);
    } else if (this.amountInCart === 1) {
      console.log("called remove")
      this.cartService.removeProductFromCart(this.product.indexInCart);
    }
  }

  add():void {
    this.amountInCart += 1;
    this.cartService.changeProductAmount(this.product.indexInCart, this.amountInCart)
  }

}
