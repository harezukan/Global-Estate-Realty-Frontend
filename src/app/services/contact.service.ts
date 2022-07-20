import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/Contact.class';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:HttpClient) { }

 contactForm(contact:any){
    const api=environment.serverUrl + `/contact`
    return this.httpClient.post<Contact>(api,contact);

  }

  contactPage(contact:Contact){
    const api=environment.serverUrl + `/contact-page`
    return this.httpClient.post<Contact>(api,contact);

  }

  getAllContactForm(){
    const api=environment.serverUrl + '/contactForm/all'
    return this.httpClient.get<Contact[]>(api);
   }

   deleteContactForm(id:number){
    const api=`${environment.serverUrl}/admin-panel/contact/${id}`;
    return this.httpClient.delete<Contact>(api);
    
  }


}

