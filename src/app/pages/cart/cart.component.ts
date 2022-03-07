import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import CartModel from 'src/app/models/cart';
import UserModel from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class CartComponent implements OnInit {
    cart: CartModel;
    localUser: UserModel;

    constructor(private cartService: CartService, private router: Router) {
        this.cart = {
            products: [],
            total: 0
        }

        this.localUser = {
            fullName: "",
            creditCard: "",
            address: ""
        }
    }

    ngOnInit(): void {
        this.cart = this.cartService.getCart()
    }

    submitForm(): void {
        this.cartService.submitOrder(this.localUser).then((res) => {
            if (res.status === 200) {
                const firstName = this.localUser.fullName.split(' ')[0]
                this.router.navigate([`/success/${firstName}/${res.orderNumber}`])
            }
        })
    }

    formatCreditCard(value: string) {
        this.localUser.creditCard = value.replace(/\D/g, '')
        .replace(/(\d{4})(\d)/, '$1.$2')
        .replace(/(\d{4})(\d)/, '$1.$2')
        .replace(/(\d{4})(\d{1,2})/, '$1.$2')
        .replace(/(.\d{4})\d+?$/, '$1')
    }


}