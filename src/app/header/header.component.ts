import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ProductsService:ProductsService) { }
  newproduct:any=[];

  ngOnInit(): void {
    this.newproduct=this.ProductsService.getAllProduct();
  }
  searchtext:string=''
  onsearchtextenrt(searchvalue:string){
    this.searchtext=searchvalue;
    console.log(this.searchtext);
  }

}
