import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { City } from '../models/City.class';
import { GetProducts } from '../models/GetProducts.class';
import { Product } from '../models/Product.class';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:GetProducts[]=[];
  sub:Subscription | undefined;
  allCity:City[]=[];
  constructor(private activeRoute:ActivatedRoute,private productService:ProductService) { }
  ngOnInit(): void {
    this.sub=this.activeRoute.paramMap.subscribe(params=>{
      let id=Number(params.get('id'));
      this.getProduct(id);
      
    })

  }

  getProduct(id:number){
    this.productService.getProductCategory(id).subscribe((response:GetProducts[])=>{
        ;
        this.products=response;
        console.log(this.products)
    })
    
  }

}


