import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User.class';
import { RegisterService } from '../services/register.service';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    address: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }

  user:User={} as User;

  constructor(private router:Router, private registerService:RegisterService,private toaster:ToastrService) { }

  ngOnInit(): void {

  
    
  }
registerUser(e:any){
    e.preventDefault();
       this.registerService.registerUser(this.user).subscribe((response:User)=>{
          if(response){
            this.toaster.success('Successfully registered')
          }
          this.router.navigateByUrl('login');
       });
        
       
  }

  backToLogin(){
    this.router.navigateByUrl('login');
  }

  

  
}



  




