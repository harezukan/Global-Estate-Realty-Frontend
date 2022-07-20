import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/Contact.class';
import { GetProducts } from '../models/GetProducts.class';
import { Product } from '../models/Product.class';
import { ContactService } from '../services/contact.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  form = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(1)]),
    message:new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  
  get f(){
    return this.form.controls;
  }
  

   product:any={} as GetProducts;
  constructor(private productService:ProductService,private activeRoute:ActivatedRoute,private contactService:ContactService,public userService:UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    const id=Number(this.activeRoute.snapshot.params['id']);
    this.getDetailsProduct(id);
  }

  getDetailsProduct(id:number){
    this.productService.getDetailsProduct(id).subscribe((response:GetProducts)=>{
      this.product=response;
       
      
      this.productService.getProductImage(id).subscribe((images:any)=>{
        this.product.image=images;
         
       })
    })
  }

  saveContactForm(product:any){
    if(this.userService.loggedUser.role==='ADMIN'){
      this.toastr.error('Admin is unable to submit messages');
      return;
    }
    this.contactService.contactForm(product).subscribe((response:any)=>{
      if(response){
        this.toastr.success('Successfuly subbmited');
        this.form.reset();
      }
    })
      
     
      
 

  }

 
}
