import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  editCategoryForm: FormGroup;
  
  event: EventEmitter<any> = new EventEmitter();

  constructor(private builder: FormBuilder, private bsModalRef: BsModalRef) {
    this.editCategoryForm= this.builder.group({
      name: new FormControl('', []),
      arName: new FormControl('', [])
    });


    

   
  }

  onPostEditFormSubmit() {
   

   
  }

  onClose() {
    this.bsModalRef.hide();
  }

  ngOnInit() {

  }

}

