import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/Category.class';
import { User } from '../models/User.class';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allCategory:Category[]=[];
 

  constructor(public userService:UserService,private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getAllCategory();
  }
  
  logout(){
    this.userService.logoutUser();
    this.router.navigate(['login']);
    
  }

  getAllCategory(){
    this.productService.getCategories().subscribe((response:Category[])=>{
        this.allCategory=response;
       
        
    })
  }

  productCategory(id:number){
    this.router.navigate(['product',id]);
  }


  goToUserProfile(id:number){
    this.router.navigate(['user-profile',id]);
  }
}



