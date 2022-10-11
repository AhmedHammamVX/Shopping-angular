import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor() { }
  products=[
    {"id":1 , "name":"Nicon" , "price":10000, "oprice":12000 ,"type":"NoDiscount","Disc":"Black Camera"},
    {"id":2 , "name":"Sony" , "price":5000,"oprice":6000 ,"type":"Discount","Disc":"Gray Camera"},
    {"id":3 , "name":"Cannon" , "price":6000,"oprice":6500 ,"type":"NoDiscount","Disc":"Modern Camera"},
    {"id":4 , "name": "Samsung T-shirt" , "price":1200,"oprice":1300 ,"type":"Discount","Disc":"White Camera"},
    {"id":5 , "name":"Cannon" , "price":10000 ,"oprice":12000 ,"type":"NoDiscount","Disc":"Black Camera"},

  ]

  ngOnInit(): void {
  }

}
