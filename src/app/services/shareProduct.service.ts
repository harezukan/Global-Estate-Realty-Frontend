import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User.class';

@Injectable()
export class shareProductService {
  private product = new BehaviorSubject<any>({});
  selectedProduct = this.product.asObservable();
 
  constructor() {}

  setProduct(product: any) {
    this.product.next(product);
  }


}