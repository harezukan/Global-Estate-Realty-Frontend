import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGard } from './auth.guard';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactComponent } from './contactForm/contact.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductCityComponent } from './product-city/product-city.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { DeleteComponent } from './update/delete/delete.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'admin-panel',redirectTo:'/admin-panel/users',pathMatch:'full'},
  {path:'admin-panel',component:AdminPanelComponent,children:[
    {path:'users',component:UserListComponent},
    {path:'products',component:AddProductComponent},
    {path:'update_delete',component:DeleteComponent},
    {path:'edit/:id',component:EditComponent},
    {path:'contact',component:ContactComponent},
  ],canActivate:[AuthGard]},
   {path:'product/:id',component:ProductComponent},
   {path:'details/:id',component:DetailsPageComponent},
   {path:'contact-page',component:ContactPageComponent},
   {path:'product-city/:id',component:ProductCityComponent},
   {path:'user-profile/:id',component:UserProfilePageComponent}

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
