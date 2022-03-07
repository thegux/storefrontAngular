import { Component, OnInit } from '@angular/core';
import ProductModel from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import  { PreCartProductModel } from 'src/app/models/product';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products:ProductModel[] = []

  constructor(private productService:ProductService, private cartService: CartService) {}
  

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res:ProductModel[]) => {
        this.products = res;
    })
  }

  
  sendToCart(product:PreCartProductModel): void {
    alert(`${product.name} was added to the cart`);
    this.cartService.addProductToCart(product);
}

}
