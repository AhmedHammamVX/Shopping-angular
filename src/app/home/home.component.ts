import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private Service:ProductServiceService, private router: Router) { }
  
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

  goToProductDetails(productId: any) {
    this.router.navigate(['/home', productId,])
  }

  ngOnInit(): void {
    arrOfProduct:Array<any>;
    this.Service.getMongoProducts().subscribe((receivedProducts)=>{
      localStorage.setItem("allProducts",JSON.stringify(receivedProducts));
      this.randomProducts(receivedProducts);
    },
    (err)=>{
      console.log("there is an error in laoding products in home!")
    })
  }

}
