import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [routerTransition()]

})
export class ProductsComponent implements OnInit {
  productList = [
    {
      productId: "1",
      productName: "pizza",
      productDescription: "italian food", 
      merchantName: "Christiano",
      merchantPhone: "010985621443",
      productType:"on-demand",
      productImg:"assets/images/pizaa.png "
    },
   
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
