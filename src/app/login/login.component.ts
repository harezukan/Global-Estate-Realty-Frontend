import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User.class';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User={} as User;

  validation_login='';

  constructor(private router:Router,private userService:UserService,private loginService:LoginService) { }

  ngOnInit(): void {
  }


  loginUser(e:any){
     e.preventDefault();
     this.loginService.loginUser(this.user).subscribe((response:User)=>{
      console.log(response)
      if(response){
        this.validation_login='';
      }else{
        this.validation_login='Login failed! Please recheck the email and password and try again.';
        return;
      } 
        this.userService.saveUserToStorage(response);
        this.router.navigateByUrl('');
     })
     
  }

}
