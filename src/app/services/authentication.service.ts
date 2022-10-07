import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUrl:string="http://localhost:3001/signUp";
  loginUrl:string="http://localhost:3001/login";
  accountsUrl:string="http://localhost:3001/accounts";
  addProductUrl:string="http://localhost:3001/addproduct";
  getProductsUrl:string="http://localhost:3001/getProducts";
   constructor(private http:HttpClient) { }
   
 
   login(loginData:any):Observable<any>{
     return this.http.post(this.loginUrl,loginData).pipe(catchError((err)=>{
       return throwError(()=>(err.message || "Internal Server error"));
       }))
   }
 
   register(registData:any):Observable<any>{
    return this.http.post(this.registerUrl,registData).pipe(catchError((err)=>{
     return throwError(()=>(err.message || "Internal Server error"));
     }))
   }
 
   getMongoAccount(){
     return this.http.get(this.accountsUrl).pipe(catchError((err)=>{
       return throwError(()=>(err.message || "Internal Server error"));
       }))
   }
 
   addProductToMongo(product:any):Observable<any>{
    console.log("the product from user.service :",product);
     return this.http.post(this.addProductUrl,product).pipe(catchError((err)=>{
       return throwError(()=>(err.message || "Internal Server error"));
       }))
   }
 
   getMongoProducts(){
     return this.http.get(this.getProductsUrl).pipe(catchError((err)=>{
       return throwError(()=>(err.message || "Internal Server error"));
       }))
   }

}
