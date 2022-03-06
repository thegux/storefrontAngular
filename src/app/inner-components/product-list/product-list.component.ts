import { Component, OnInit } from '@angular/core';
import ProductModel from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products:ProductModel[] = []

  constructor(private productService:ProductService) {}
  

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res:ProductModel[]) => {
        this.products = res;
    })
  }

}
