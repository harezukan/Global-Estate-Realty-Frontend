import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class ImageService {

    constructor(private httpClient:HttpClient) { }
  
    insertProductImage(product:any){
        const api=`${environment.serverUrl}/product-image`
        return this.httpClient.post(api,product);
      }
  }

  