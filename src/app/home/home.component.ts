import { Component, OnInit } from '@angular/core';
import { City } from '../models/City.class';
import { GetProducts } from '../models/GetProducts.class';
import { CityService } from '../services/city.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities:City[]=[] ;

   products:GetProducts[]=[];
 
  constructor(private cityService:CityService,private productService:ProductService) { }

  ngOnInit(): void {
    
    
      this.cityCard();
    
      
    this.mostPopularProduct();
  }

  cityCard(){
    this.cityService.getCity().subscribe((response:City[])=>{

      this.cities=response;
  })
}

  mostPopularProduct(){
    this.productService.getMostPopularProduct().subscribe((response)=>{
      this.products=response;
      this.products.forEach((el:any)=>{
        this.productService.getProductImage(el.id).subscribe((images:any)=>{
         el['image']=images;
         
        })
    })
      
    })
  }
}
