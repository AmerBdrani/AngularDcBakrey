import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../Models/order';
import { of } from 'rxjs';
import { OrderVM } from '../Models/order-vm';
import { RequestOptions,Headers } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {

  //gurl:string="http://192.168.14.154:8888/swagger/ui/index#!/Order/Order_Get";

  gurl:string= "https://localhost:44367/api/Orders"
  urlid:string="https://localhost:44367/api/Orders/Get_Order_by_id/";
  posturl:string="https://localhost:44367/api/Orders";
  orders:Order[] | undefined;
  order:Order | undefined;
  ordervm:OrderVM | undefined;

  _OrderId:string | undefined;
  St:any;
  //stetus:string | undefined;
  stetusDesc=["in_progress","completed","delivered"]
  steatusIndex=0;
  
  constructor(public http:HttpClient) {


   }

//Get All Orders In The Screen ;

  getAllOrders(){
    this.http.get(this.gurl).toPromise().then(
res=>{
  this.orders = res as Order[];
  console.log(res)

},err=>{
console.log(err);
}
    )
  }

PutOrder(id:any,stut:any){
  
    const headers = new Headers({ "Content-Type": "application/json" });
    const options = new RequestOptions({ headers });
  
    this.http.post<any>(this.urlid + id,stut).subscribe(res => {

      
      this.getAllOrders();
    },
    err=>{
console.log(err);
    })
    
  }


  // Get Single Order
 /* getSingleOrder(){
    this.http.get(this.urlid + this.id).toPromise().then(
      res=>{
        this.sorder = res as Order[];
      }
    )
  }*/

  //Update Status
  
  /*upDateOrder(){
    this.http.put(this.posturl+"/" + this.order.id,this.St).subscribe(
      res=>{
        this.order = res as Order;
        
      }

    )
  }
/*onClick(){

  
if(this.stetus="in_progress"){
  this.stetus="completed"


}else if(this.stetus="completed"){
  this.stetus="delivered"
}else if(this.stetus="delivered"){


}
}*/
}
