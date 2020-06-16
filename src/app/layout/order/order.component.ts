import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  animations: [routerTransition()],



})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
