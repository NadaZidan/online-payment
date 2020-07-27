import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  
})
export class AddCategoryComponent implements OnInit {
  public options: FormArray;
  public addNewCategoryForm: FormGroup;
  public show : boolean = false;

  ngOnInit(): void {
  }

  constructor(private builder: FormBuilder, private bsModalRef: BsModalRef) {
    
    this.addNewCategoryForm = this.builder.group({
      options: this.builder.array([ this.createOption() ])
    });
    

    

  
  }
 
  createOption(): FormGroup {
    return this.builder.group({
      name: '',
      arName: '',
      type: '',
    });
  }
  
 
 
  addNewField(): void 
  {this.show=!this.show
    this.options = this.addNewCategoryForm.get('options') as FormArray;
    this.options.push(this.builder.group({
      name: '',
      arName: '',
      type: '',
    }));
  }
  

  removeOption(i: number) {
    this.options.removeAt(i);
  }

  
 
  onPostFormSubmit(){
    
    
  
   
    
  }

  onClose(){
    this.bsModalRef.hide();
  }
  logValue() {
    console.log(this.options.value);
  }

 

}
