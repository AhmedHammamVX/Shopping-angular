import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private Service: ProductServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }
  products: any[] = [];
  productid: any
  selectedProduct: any;
  ngOnInit(): void {
    this.Service.getMongoProducts().subscribe((receivedProducts) => {
      this.products = receivedProducts as Array<any>;
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        this.productid = params.get("id");
        for(let i=0;i<this.products.length;i++){
          if(this.productid==this.products[i].id){
            this.selectedProduct=this.products[i];
            break;
          }
        }
        console.log(this.productid);
        console.log(this.selectedProduct);
      })
    },
      (err) => {
        console.log("there is an error in laoding products in home!")
      })

  };

}
