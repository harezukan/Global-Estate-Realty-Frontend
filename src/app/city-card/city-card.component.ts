import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { City } from '../models/City.class';


@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {

  @Input() city:City=<City>{}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  productCities(id:number){
   
    this.router.navigate(['product-city',id]);
  }
  

  

}
