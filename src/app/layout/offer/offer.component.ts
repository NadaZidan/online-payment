import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  animations: [routerTransition()],

})
export class OfferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
