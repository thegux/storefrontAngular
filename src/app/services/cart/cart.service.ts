import { Injectable } from '@angular/core';
import UserModel from 'src/app/models/user';
import CartModel from '../../models/cart';
import ProductModel, { CartProductModel, PreCartProductModel } from '../../models/product';

@Injectable({
	providedIn: 'root'
})

export class CartService {
	cart: CartModel;
	constructor() {
		this.cart = {
			products: [],
			total: 0,
		}
	}

	getCart() {
		return this.cart;
	}

	addProductToCart(product: PreCartProductModel) {
		const indexInCart = this.cart.products.length;
		const cartProduct: CartProductModel = { ...product, indexInCart: indexInCart }
		this.cart.products = this.cart.products.concat(cartProduct);
		this.cart.total += product.price * product.amountInCart;
	}

	removeProductFromCart(indexInCart: number) {
		const product = this.cart.products.filter(p => p.indexInCart === indexInCart)[0];
		this.cart.total -= product.price * (product?.amountInCart || 0);
		this.cart.products = this.cart.products.filter((i) => i.indexInCart !== indexInCart);
	}

	changeProductAmount(indexInCart: number, amountInCart: number) {
		const productIndex = this.cart.products.findIndex(p => p.indexInCart === indexInCart);
		const product = this.cart.products[productIndex];
		this.cart.total -= product.price * (product.amountInCart || 0);
		this.cart.products[productIndex].amountInCart = amountInCart;
		this.cart.total += product.price * amountInCart;
	}

	async submitOrder(_user: UserModel) {
		//simulate order submit to real api
		//sends the user to the api with the cart info
		//await for api answer
		const res = await {
			status: 200,
			cart: this.cart.products,
			orderNumber: Math.floor(Math.random() * 1000000)
		};

		//clear cart 
		this.cart = { products: [], total: 0 };

		return res;
	}

}