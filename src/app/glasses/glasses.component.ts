import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.css']
})
export class GlassesComponent implements OnInit {

  constructor() { }
  products=[
    {"id":1 , "name":"Ray Ban" , "price":10000, "oprice":12000 ,"type":"NoDiscount",},
    {"id":2 , "name":"Gucci" , "price":10000, "oprice":12000 ,"type":"NoDiscount",},
    {"id":3 , "name":"Oakley" , "price":10000, "oprice":12000 ,"type":"NoDiscount",},
    {"id":4 , "name":"Prada" , "price":10000, "oprice":12000 ,"type":"NoDiscount",},
    {"id":5 , "name":"Christiane Dio" , "price":10000, "oprice":12000 ,"type":"NoDiscount",},

  ]
  ngOnInit(): void {
  }
  searchtext:string=''
  onsearchtextenrt(searchvalue:string){
    this.searchtext=searchvalue;
    console.log(this.searchtext);
  }

}
