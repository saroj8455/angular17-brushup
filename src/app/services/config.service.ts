import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  loadProductsFromFakeApi() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
