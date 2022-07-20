import { Component,  OnInit ,EventEmitter, Output,TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/Category.class';
import { City } from 'src/app/models/City.class';
import { Country } from 'src/app/models/Country.class';
import { GetProducts } from 'src/app/models/GetProducts.class';
import { Product } from 'src/app/models/Product.class';
import { ProductService } from 'src/app/services/product.service';
import { shareProductService } from 'src/app/services/shareProduct.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ImageService } from 'src/app/services/imageService';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  
})
export class DeleteComponent implements OnInit {

  image:string='';
  products:GetProducts[]=[];

  product:GetProducts={} as GetProducts;
 

 

  sub:Subscription | undefined;
  

  modalRef?: BsModalRef;

constructor(private productService:ProductService,private activeRoute:ActivatedRoute,private route:Router,private shareProduct:shareProductService,private modalService: BsModalService,private imageService:ImageService,private toaster:ToastrService) { 
  
}

  ngOnInit(): void {
   
      this.allProducts();

      
  }

  allProducts(){
    this.productService.getAllProduct().subscribe((response:GetProducts[])=>{
         this.products=response;
         console.log(this.products)
         
    })
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe((response:GetProducts)=>{
      this.allProducts();
    });
    
    
  }

  editProduct(product:any){
    this.shareProduct.setProduct(product)
      this.route.navigate([`admin-panel/edit/${product.id}`]);
  }

  searchMovie(){

  }

  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  saveImage(id:any){
   this.imageService.insertProductImage({productId:id,image:this.image}).subscribe((response)=>{
    console.log(response);
    this.image='';
    this.toaster.success('Image successfully uploaded')
   })
    this.modalRef?.hide();
  }
}




