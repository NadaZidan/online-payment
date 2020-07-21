import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [NgbCarouselModule,ReportsRoutingModule,
    
    CommonModule
  ]
})
export class ReportsModule { }
