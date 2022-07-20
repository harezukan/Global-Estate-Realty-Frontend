import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/Category.class';
import { City } from '../models/City.class';
import { Country } from '../models/Country.class';
import { GetProducts } from '../models/GetProducts.class';
import { Product } from '../models/Product.class';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  setProduct(product: any) {
    throw new Error('Method not implemented.');
  }
 
  constructor(private httpClient:HttpClient) { }

  getCategories(){
    const api=environment.serverUrl + '/category/all';
    return this.httpClient.get<Category[]>(api);
  }

  getCities(){
    const api=environment.serverUrl + '/city/all';
    return this.httpClient.get<City[]>(api);
  }

  getCountry(){
    const api=environment.serverUrl + '/country/all';
    return this.httpClient.get<Country[]>(api);
  }

  insertProduct(product:Product){
    const api=environment.serverUrl + '/product'
    return this.httpClient.post<Product>(api,product);
  }

  getAllProduct(){
    const api=environment.serverUrl + '/product/all'
    return this.httpClient.get<GetProducts[]>(api);
   }

   deleteProduct(id:number){
    const api=`${environment.serverUrl}/admin-panel/update_delete/${id}`;
    return this.httpClient.delete<GetProducts>(api);
    
  }

  getProductCategory(id:number){
    const api=`${environment.serverUrl}/product/${id}`;
    return this.httpClient.get<GetProducts[]>(api);
   }

   getProductImage(id:number){
    const api=environment.serverUrl + '/product-image/all/'+id;
    return this.httpClient.get(api);
   }

   getProductEdit(id:number){
    const api=`${environment.serverUrl}/edit/${id}`;
    return this.httpClient.get<Product>(api);
   }

   getMostPopularProduct(){
    const api=environment.serverUrl + '/popularProduct'
    return this.httpClient.get<GetProducts[]>(api);
   }

   getDetailsProduct(id:number){
    const api=`${environment.serverUrl}/details/${id}`;
    return this.httpClient.get<GetProducts>(api);
   }

   getProductCity(id:number){
    const api=`${environment.serverUrl}/product-city/${id}`;
    return this.httpClient.get<GetProducts[]>(api);
   }

  

   updateProduct(product:GetProducts){
    const api=environment.serverUrl + '/update-product'
    return this.httpClient.put<GetProducts>(api,product);
   }
  
   


}

