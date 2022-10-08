import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private Service:ProductServiceService) { }
  
  products:any []=[];
  

  //loading random products
  randomProducts = (receivedProducts:any)=>{
    let arr:number[]=[];
    for (let i = 0; i < 8; i++) {
      let random:number = Math.floor(Math.random()*39);
      while(arr.includes(random))
      {
        random = Math.floor(Math.random()*39);
      }
      arr.push(random);
      this.products.push(receivedProducts[random])
    }
    for (const iterator of arr) {
      console.log(iterator);
    }
  }

  ngOnInit(): void {
    this.Service.getMongoProducts().subscribe((receivedProducts)=>{
      this.randomProducts(receivedProducts);
    },
    (err)=>{
      console.log("there is an error in laoding products in home!")
    })
  }

}
