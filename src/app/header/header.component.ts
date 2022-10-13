import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { SigninService } from '../services/signin.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ProductsService:ProductsService, public sin:SigninService) { }
  welcome:string="";
 
  newproduct:any=[];

  ngOnInit(): void {
    this.sin.homeWelcome$.subscribe(data => {
      console.log("in subs....: ", data);
      this.welcome = data;
    });
   // this.newproduct=this.ProductsService.getAllProduct();
   // currentUser=JSON.stringify(sessionStorage.getItem("currentUser"));
  }
  searchtext:string=''
  onsearchtextenrt(searchvalue:string){
    this.searchtext=searchvalue;
    console.log(this.searchtext);
  }

}
