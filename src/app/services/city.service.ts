import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { City } from '../models/City.class';

@Injectable({
  providedIn: 'root'
})
export class CityService {
 
  constructor(private httpClient:HttpClient) { }

  getCity(){
    const api=environment.serverUrl + '/';
    return this.httpClient.get<City[]>(api);
  }
}
