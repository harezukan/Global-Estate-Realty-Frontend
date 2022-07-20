import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../models/City.class';
import { GetProducts } from '../models/GetProducts.class';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-city',
  templateUrl: './product-city.component.html',
  styleUrls: ['./product-city.component.css']
})
export class ProductCityComponent implements OnInit {
  product:any={};
  products:GetProducts[]=[];
 
  
  constructor(private productService:ProductService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id=Number(this.activeRoute.snapshot.params['id']);
    this.cityProduct(id);
   
  }

  cityProduct(id:number){
    this.productService.getProductCity(id).subscribe((response:GetProducts[])=>{
        ;
        this.products=response;
        
    })
  }

}
