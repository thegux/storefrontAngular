import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import CartModel from 'src/app/models/cart';
import UserModel from 'src/app/models/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class CartComponent implements OnInit {
  cart: CartModel;
  localUser: UserModel;

  constructor(private cartService: CartService) {
    this.cart = {
      user: [],
      products: []
    }

    this.localUser = {
      fullName: "",
      creditCard: 0,
      address: ""
    }
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
  }

  
}