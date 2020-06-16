import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferRoutingModule } from './offer-routing.module';




@NgModule({
  declarations: [OfferComponent],
  imports: [NgbAlertModule, NgbCarouselModule,OfferRoutingModule,
    CommonModule
  ]
})
export class OfferModule { }
