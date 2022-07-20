import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/Contact.class';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:Contact[]=[];
  constructor(private contactFormService:ContactService) { }

  ngOnInit(): void {
    this.getContactForms();
  
  }

  getContactForms(){
    this.contactFormService.getAllContactForm().subscribe((response:Contact[])=>{
           this.contactForm=response;
           
    })
  }

  deleteContactForm(id:number){
    this.contactFormService.deleteContactForm(id).subscribe((response:Contact)=>{

      this.getContactForms();
  })
}
  

}
