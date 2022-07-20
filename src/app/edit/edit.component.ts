import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastRef, ToastrService } from 'ngx-toastr';
import { Category } from '../models/Category.class';
import { City } from '../models/City.class';
import { Country } from '../models/Country.class';
import { GetProducts } from '../models/GetProducts.class';

import { Product } from '../models/Product.class';

import { ProductService } from '../services/product.service';
import { shareProductService } from '../services/shareProduct.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  allCategory:Category[]=[];
  allCity:City[]=[];
  allCountry:Country[]=[];

  sub:any;

  

  

  constructor(public productService:ProductService,public activeRoute:ActivatedRoute,private shareProduct:shareProductService,private toastr: ToastrService,private router:Router) { }
  product:GetProducts={} as GetProducts;
  
 
  
   ngOnInit(): void {

    this.getAllCategory();
    this.getAllCity();
    this.getAllCountry();

    this.sub=this.activeRoute.params.subscribe(param=>{
      let id=param['id']
      
    })
       
    this.shareProduct.selectedProduct.subscribe((prod)=>{
      this.product=prod;
      console.log(this.product)
    })
  }

  

  getAllCategory(){
    this.productService.getCategories().subscribe((response:Category[])=>{
        this.allCategory=response;
        
        
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

 

  editProduct(product:GetProducts){
     this.productService.updateProduct(product).subscribe((response:GetProducts)=>{
      if(response){
      this.toastr.success('Successfuly subbmited');
      this.router.navigateByUrl('/admin-panel/update_delete')
      }
      this.product={} as GetProducts;
      

        
    
     })
  }

  

}
