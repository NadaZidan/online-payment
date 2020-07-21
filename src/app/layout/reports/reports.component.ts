import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  animations: [routerTransition()]

})
export class ReportsComponent implements OnInit {
  reportsList = [
    {
      reportsId:"1",
      reportsName:"Nada ",
      reportsNumber :"10",
      reportsMessage:"complain for bad quality products"
    },
   
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
