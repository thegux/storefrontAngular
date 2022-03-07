import { Component, Input, OnInit, ViewEncapsulation,Output, EventEmitter } from '@angular/core';
import ProductModel, { PreCartProductModel } from 'src/app/models/product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    encapsulation: ViewEncapsulation.None,
})


export class ProductComponent implements OnInit {
    @Input() product: ProductModel;
    amountInCart: number = 0;
    @Output() sendToCart:EventEmitter<PreCartProductModel>= new EventEmitter;

    constructor() {
        this.product = {
            id: 0,
            name: "",
            price: 0,
            url: "",
            description: ""
        }
    }

    ngOnInit(): void { }

    subtract() {
        if (this.amountInCart > 1) {
            this.amountInCart -= 1;
        }
    }

    add(): void {
        this.amountInCart += 1;
    }

    addToCart():void {
        if (this.amountInCart > 0) {
            const cartProduct:PreCartProductModel  = {
                ...this.product,
                amountInCart: this.amountInCart
            };
            this.sendToCart.emit(cartProduct);

        } else {
            alert('You need to select the product amount first');
        }
    }



}

