import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  animations: [routerTransition()],



})
export class OrderComponent implements OnInit {
  orderList = [
    {
      orderId:"1",
      createdAt: "",
      orderStatus:"Pendding",
      merchantName: "Christiano",
      merchantPhone: "010985621443",
      customerName: "Nada",
      customerPhone: "010989522115", 
      orderAddress:"Giza-haram-12568445",
      productId :"1 ",
      productName:"pizaa",
    },
   
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
