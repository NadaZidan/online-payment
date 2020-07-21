import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { StatModule } from '../../shared';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';


@NgModule({
  declarations: [ProductsComponent, ProductsdetailsComponent],
  imports: [ProductsRoutingModule,NgbAlertModule, NgbCarouselModule,StatModule,
    CommonModule,CarouselModule.forRoot(), ]
})
export class ProductsModule { }
