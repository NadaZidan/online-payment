import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderRoutingModule } from './order-routing.module';




@NgModule({
  declarations: [OrderComponent],
  imports: [NgbAlertModule, NgbCarouselModule,OrderRoutingModule,
    CommonModule
  ]
})
export class OrderModule { }
