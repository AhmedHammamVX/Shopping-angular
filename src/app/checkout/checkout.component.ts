import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  fname="";
  lname:string="";
  email:string="";
  mobile:string="";
  address1:string="";
  address2:string="";
  country:string="";
  city:string="";
  state:string="";
  zipcode:string="";

  constructor() { }

  ngOnInit(): void {
   var currentUser= sessionStorage.getItem("currentUser");
   
   if(currentUser!=null){
    var user;
       user=JSON.parse(currentUser);
       this.fname=user.firstname;
       this.lname=user.lastname;
       this.email=user.email;
       this.mobile=user.mobileNo;
       this.address1=user.address1;
       this.address2=user.address2;
       this.country=user.country;
       this.city=user.city;
       this.state=user.state;
       this.zipcode=user.zipcode;
   }
  }

}
