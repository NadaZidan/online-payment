import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [routerTransition()]

})
export class CategoryComponent implements OnInit {
  bsModalRef: BsModalRef;

  categoryList = [
    {
      categoryName: "furniture",
      categoryNameAr: "أثات",

    },

  ];

  constructor( private bsModalService: BsModalService) { }
  addNewCategory() {
    this.bsModalRef = this.bsModalService.show(AddCategoryComponent);
   
  }
  deleteCategory(postId: number, title: string) {
    this.bsModalRef = this.bsModalService.show(DeleteCategoryComponent);
    this.bsModalRef.content.postId = postId;
    this.bsModalRef.content.title = title;
    
  }
  editCategory(postId: number) {

    this.bsModalRef = this.bsModalService.show(EditCategoryComponent);
   
  }
  ngOnInit(): void {
  }

}
