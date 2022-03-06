import { Injectable } from '@angular/core';
import ProductModel from '../../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts():Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('/assets/data.json')
  }

  getSingleProduct(id: number):Observable<ProductModel> {
    return this.getProducts().pipe(map((productArray:ProductModel[]) => productArray.filter((p) => p.id === id)[0]));
  }
}
