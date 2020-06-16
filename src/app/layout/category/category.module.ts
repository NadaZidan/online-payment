import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';




@NgModule({
  declarations: [CategoryComponent],
  imports: [NgbAlertModule, NgbCarouselModule,StatModule,CategoryRoutingModule,
    CommonModule
  ]
})
export class CategoryModule { }
