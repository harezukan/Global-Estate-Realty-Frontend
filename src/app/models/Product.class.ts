export interface Product{
   countryId:number;
   cityId:number;
   address:string;
   categoryId:number;
   title:string;
   price:number;
   beds:number;
   baths:number;
   image:Array<string>;
   description:string;
   contactFullName:string;
   contactEmail:string;
   contactPhone:number;
   contactMessage:string;
   contactTitle:string;
   primaryImage:string;
}