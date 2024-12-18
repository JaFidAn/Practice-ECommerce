import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Pagination } from '../../shared/models/pagination';
import type { Product } from '../../shared/models/products';
import type { ShopParams } from '../../shared/models/shopParams';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';
  private http = inject(HttpClient);
  types: string[] = [];
  brands: string[] = [];

  getProducts(shopPrams: ShopParams) {
    let params = new HttpParams();

    if (shopPrams.brands.length > 0) {
      params = params.append('brands', shopPrams.brands.join(','));
    }

    if (shopPrams.types.length > 0) {
      params = params.append('types', shopPrams.types.join(','));
    }

    if (shopPrams.sort) {
      params = params.append('sort', shopPrams.sort);
    }

    if (shopPrams.search) {
      params = params.append('search', shopPrams.search);
    }

    params = params.append('pageSize', shopPrams.pageSize);
    params = params.append('pageIndex', shopPrams.pageNumber);

    return this.http.get<Pagination<Product>>(this.baseUrl + 'products', {
      params,
    });
  }

  getProduct(id: number) {
    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }

  getTypes() {
    if (this.types.length > 0) return;
    return this.http.get<string[]>(this.baseUrl + 'products/types').subscribe({
      next: (response) => (this.types = response),
    });
  }

  getBrands() {
    if (this.brands.length > 0) return;
    return this.http.get<string[]>(this.baseUrl + 'products/brands').subscribe({
      next: (response) => (this.brands = response),
    });
  }
}
