import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/User.class';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {
   
 user:User={} as User;

  constructor(public userService:UserService,private activeRoute:ActivatedRoute,private toaster:ToastrService) { }

  ngOnInit(): void {
    const id=Number(this.activeRoute.snapshot.params['id']);
    this.getLoginUser(id);
   
  }

  getLoginUser(id:number){
    this.userService.getLoginUsers(id).subscribe((response:User)=>{
      this.user=response;
     
    })
  }

  updateLoginUser(user:User){
    this.userService.updateUserProfile(user).subscribe((response:User)=>{
      
      this.userService.saveUserToStorage(this.user);
      this.toaster.success('Successfully changed');
      
     })
  }
  }
  

