import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../models/Category.class';
import { City } from '../models/City.class';
import { Country } from '../models/Country.class';
import { Product } from '../models/Product.class';
import {  ProductService } from '../services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
  
})
export class AddProductComponent implements OnInit {


  product:Product={} as Product;
  allCategory:Category[]=[];
  allCity:City[]=[];
  allCountry:Country[]=[];
  constructor( public productService:ProductService,public activeRoute:ActivatedRoute,private toaster:ToastrService) { }
 sub:any;
  ngOnInit(): void {
    this.getAllCategory();
    this.getAllCity();
    this.getAllCountry();
    
    
   
   

    
  }

  saveProduct(e:any){
     e.preventDefault();
     this.productService.insertProduct(this.product).subscribe((response:Product)=>{
          console.log(response);
          this.product={} as Product
          this.toaster.success('Product has been successfully uploaded')
     })
  }

  getAllCategory(){
    this.productService.getCategories().subscribe((response:Category[])=>{
        this.allCategory=response;
        console.log(this.allCategory);
        
    })
  }


  getAllCity(){
    this.productService.getCities().subscribe((response:City[])=>{
        this.allCity=response;
      
    })
  }

  getAllCountry(){
    this.productService.getCountry().subscribe((response:Country[])=>{
        this.allCountry=response;
      
    })
  }




}


