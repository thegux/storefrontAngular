import { Component, OnInit } from '@angular/core';
import ProductModel from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['../../inner-components/product/product.component.css', './product-page.component.css']
})

export class ProductPageComponent implements OnInit {
    product: ProductModel;
    amountInCart: number = 0;

    constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) {
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
        if (this.amountInCart > 1) {
            this.amountInCart -= 1;
            this.cartService.changeProductAmount(this.product.id, this.amountInCart);
        } else if (this.amountInCart === 1) {
            this.cartService.removeProductFromCart(this.product.id);
        }
    }

    add(): void {
        this.amountInCart += 1;
        this.cartService.changeProductAmount(this.product.id, this.amountInCart);
    }

    addToCart(): void {
        if (this.amountInCart > 0) {
            alert(`${this.product.name} was added to the cart`);
            this.cartService.addProductToCart(this.product, this.amountInCart);
        } else {
            alert('You need to select the product amount first')
        }

    }



}
