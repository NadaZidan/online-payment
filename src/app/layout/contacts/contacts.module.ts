import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { ContactsComponent } from './contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsRoutingModule } from './contacts-routing.module';


@NgModule({
  declarations: [ContactsComponent],
  imports: [ContactsRoutingModule,NgbAlertModule, NgbCarouselModule,StatModule,
    CommonModule,ReactiveFormsModule
  ]
})
export class ContactsModule { }
