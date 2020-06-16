import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [UsersRoutingModule,NgbAlertModule, NgbCarouselModule,StatModule,
    CommonModule
  ]
})
export class UsersModule { }
