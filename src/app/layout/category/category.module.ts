import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { AddCategoryComponent } from './add-category/add-category.component';

import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';





@NgModule({
  declarations: [CategoryComponent, AddCategoryComponent, EditCategoryComponent, DeleteCategoryComponent],
  imports: [NgbAlertModule, NgbCarouselModule,StatModule,CategoryRoutingModule, ModalModule.forRoot()
    ,
    CommonModule,FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents:[AddCategoryComponent, DeleteCategoryComponent, EditCategoryComponent],

})
export class CategoryModule { }
