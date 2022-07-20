import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GetProducts } from '../models/GetProducts.class';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-most-popular-listing',
  templateUrl: './most-popular-listing.component.html',
  styleUrls: ['./most-popular-listing.component.css']
})
export class MostPopularListingComponent implements OnInit {

  @Input() product:any=<any>{}
  modalRef?: BsModalRef;

  constructor(private route:Router,public userService:UserService,private modalService: BsModalService) { }

  ngOnInit(): void {

  }

  detailsPage(id:number){
    if(this.userService.loggedUser.id){
      this.route.navigate(['details',id])
    }
  }

  

  openModal(template: TemplateRef<any>) {
    if(!this.userService.loggedUser.id)
    this.modalRef = this.modalService.show(template);
  }

  

}
