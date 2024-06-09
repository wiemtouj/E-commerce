import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8081/api/products';

  constructor(private http: HttpClient) { }

  getProduits(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduitById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  createProduit(produit: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, produit);
  }

  updateProduit(produit: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${produit.id}`, produit);
  }

  deleteProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  
}