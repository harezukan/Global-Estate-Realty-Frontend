import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,CanActivate,Router,RouterStateSnapshot,UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./services/user.service";


@Injectable({providedIn:'root'})
export class AuthGard implements CanActivate{

constructor(private router:Router,public userService:UserService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        if(!this.userService.loggedUser)return this.router.createUrlTree(['/home']);
        if(this.userService.loggedUser.role==='ADMIN') return true;

        else{
            return this.router.createUrlTree(['/home']);
        }
       
    }

    
}