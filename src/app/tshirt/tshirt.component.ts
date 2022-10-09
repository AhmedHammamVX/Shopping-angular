import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent implements OnInit {

  constructor() { }
  products=[
    {"id":1 , "name":"Polo T-shirt" , "price":10000, "oprice":12000 ,"type":"NoDiscount","Disc":"Black T-shirt"},
    {"id":2 , "name":"Croc T-shirt" , "price":5000,"oprice":6000 ,"type":"Discount","Disc":"Blue T-shirt"},
    {"id":3 , "name":"HM t-shirt" , "price":6000,"oprice":6500 ,"type":"NoDiscount","Disc":"Red T-shirt"},
    {"id":4 , "name": "One T-shirt" , "price":1200,"oprice":1300 ,"type":"Discount","Disc":"Orange T-shirt"},
    {"id":5 , "name":"Polo T-shirt" , "price":10000 ,"oprice":12000 ,"type":"NoDiscount","Disc":"Coffe T-shirt"},

  ]

  ngOnInit(): void {
  }

}
