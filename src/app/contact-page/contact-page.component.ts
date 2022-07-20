import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/Contact.class';
import { ContactService } from '../services/contact.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {  Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  form = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(1)]),
    message:new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  
  get f(){
    return this.form.controls;
  }
   
  submit(){
    
  }
  contact:Contact={} as Contact
  messageReponse=''
  constructor(private contactService:ContactService,private toastr: ToastrService,private router:Router,public userService:UserService) { }

  ngOnInit(): void {
    
  }

  ContactForm(e:any){
    if(!this.userService.loggedUser.firstName){
      this.toastr.error('Please log in to submit this message');
      return;
      
    }
    if(this.userService.loggedUser.role==='ADMIN'){
      this.toastr.error('Admin is unable to submit messages');
      return;
    }
    e.preventDefault();
    this.contactService.contactPage(this.contact).subscribe((response:any)=>{
    if(response){
      this.toastr.success('Successfuly subbmited');
      this.form.reset();
    }
      
   });

}
}
