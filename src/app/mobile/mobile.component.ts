import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor() { }
  products=[
    {"id":1 , "name":"Iphone 13" , "price":10000, "oprice":12000 ,"type":"NoDiscount","Disc":"256 6Ram"},
    {"id":2 , "name":"Sony xperia" , "price":5000,"oprice":6000 ,"type":"Discount","Disc":"128 3Ram"},
    {"id":3 , "name":"Samsung Not10" , "price":6000,"oprice":6500 ,"type":"NoDiscount","Disc":"64 6am"},
    {"id":4 , "name": "Xaomi 10T" , "price":1200,"oprice":1300 ,"type":"Discount","Disc":"512 8Ram"},
    {"id":5 , "name":"oppo A53" , "price":10000 ,"oprice":12000 ,"type":"NoDiscount","Disc":"128 4Ram"},

  ]
  ngOnInit(): void {
  }

}
