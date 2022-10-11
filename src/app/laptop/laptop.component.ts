import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor() { }
  products=[
    {"id":1 , "name":"Dell" , "price":10000, "oprice":12000 ,"type":"NoDiscount","Disc":"256ssd 12Ram"},
    {"id":2 , "name":"Sony" , "price":5000,"oprice":6000 ,"type":"Discount","Disc":"1Tssd 12Ram"},
    {"id":3 , "name":"Toshiba" , "price":6000,"oprice":6500 ,"type":"NoDiscount","Disc":"256ssd 12Ram"},
    {"id":4 , "name": "Acer" , "price":1200,"oprice":1300 ,"type":"Discount","Disc":"512ssd 12Ram"},
    {"id":5 , "name":"Lenovo" , "price":10000 ,"oprice":12000 ,"type":"NoDiscount","Disc":"128ssd 12Ram"},

  ]
  ngOnInit(): void {
  }

}
