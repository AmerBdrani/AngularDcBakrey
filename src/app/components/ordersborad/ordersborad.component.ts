import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { OrderServicesService } from 'src/app/Services/order-services.service';
import { interval, take } from 'rxjs';
import { Router } from '@angular/router';






@Component({
  selector: 'app-ordersborad',
  templateUrl: './ordersborad.component.html',
  styleUrls: ['./ordersborad.component.css']
})
export class OrdersboradComponent implements OnInit {

  UpdateTiketTime = interval(20000);

  OrderId:any;
  OrderStutes:any;
  box:any;
  

  constructor(public serv:OrderServicesService) { 
  
  }

  ngOnInit(): void {

   this.serv.order={
    indexNo:0,
    id:"",
    referenceId:"",
    date:"",
    Amount:"",
    status:"",
    printStatus:""

 },
    this.serv.ordervm={
      status:null
    }

this.UpdateTiketTime.subscribe( () => {
  this.serv.getAllOrders();
 

});
    
  }
OnClick(item:any){

  this.OrderId = item.id;
  //this.status= item.status;
  console.log(this.OrderId);
  //this.serv.order?.status=item.status;
    
if(item.status == "in_progress")
{
  item.status = "completed";
  //this.box = document.getElementById('box').style.color = '#2DCD5D';;
  
  this.OrderStutes=item.status;
  this.serv.PutOrder(this.OrderId,this.OrderStutes);


}else if(item.status == "completed")
{
  item.status = "compdeliveredleted";
  this.OrderStutes=item.status;
  this.serv.PutOrder(this.OrderId,this.OrderStutes);
}else if(item.status == "delivered")
{
  
  this.OrderStutes = "delivered";
  this.OrderStutes=item.status;
  this.serv.PutOrder(this.OrderId,this.OrderStutes);
}
  }

}
