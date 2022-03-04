import { Injectable } from '@angular/core';
import CartModel from './models/cart';
import ProductModel from './models/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart:CartModel;
  constructor() {
		this.cart = {
			products: [],
		}
   } 

   getCart() {
	   return this.cart
   }

   addProductToCart(product: ProductModel, amountInCart: number) {
	   const cartProduct:ProductModel = {...product, amountInCart: amountInCart}
	   this.cart.products = this.cart.products.concat(cartProduct);
   }

   removeProductFromCart(id: number) {
	   this.cart.products = this.cart.products.filter((p) => p.id !== id)
   }

   changeProductAmount(id:number, amountInCart: number) {
	  const productIndex = this.cart.products.findIndex((p) => p.id === id)
	  this.cart.products[productIndex].amountInCart = amountInCart
   }

}