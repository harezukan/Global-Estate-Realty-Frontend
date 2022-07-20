import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-show-city-product',
  templateUrl: './show-city-product.component.html',
  styleUrls: ['./show-city-product.component.css']
})
export class ShowCityProductComponent implements OnInit {
  @Input() product:any={} as any;
  modalRef?: BsModalRef;
  constructor(public userService:UserService,private router:Router,private modalService: BsModalService) { }

  ngOnInit(): void {
  }


  goToDetails(id:number){
    if(this.userService.loggedUser.id){
      this.router.navigate(['details',id]);
    }
  }

  openModal(template: TemplateRef<any>) {
    if(!this.userService.loggedUser.id)
    this.modalRef = this.modalService.show(template);
  }
}
