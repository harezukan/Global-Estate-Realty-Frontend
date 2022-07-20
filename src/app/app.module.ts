import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CityCardComponent } from './city-card/city-card.component';
import { AboutHomeComponent } from './about-home/about-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserListComponent } from './user-list/user-list.component';
import { DeleteComponent } from './update/delete/delete.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { EditComponent } from './edit/edit.component';
import { MostPopularListingComponent } from './most-popular-listing/most-popular-listing.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contactForm/contact.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { shareProductService } from './services/shareProduct.service';
import { ProductCityComponent } from './product-city/product-city.component';
import { ShowCityProductComponent } from './show-city-product/show-city-product.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { PopoverModule } from 'ngx-bootstrap/popover';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    CityCardComponent,
    AboutHomeComponent,
    AboutComponent,
    AdminPanelComponent,
    AddProductComponent,
    UserListComponent,
    DeleteComponent,
    ShowProductComponent,
    EditComponent,
    MostPopularListingComponent,
    DetailsPageComponent,
    ContactComponent,
    ContactPageComponent,
    ProductCityComponent,
    ShowCityProductComponent,
    UserProfilePageComponent,
   
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    TooltipModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    ToastrModule.forRoot()
   
    
    
   
   
  ],
  providers: [
    shareProductService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
