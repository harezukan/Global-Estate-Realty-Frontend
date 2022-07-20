import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  @Input() product:any={} as any;

  modalRef?: BsModalRef;

  constructor(private router:Router, public userService:UserService,private modalService: BsModalService) { }

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
