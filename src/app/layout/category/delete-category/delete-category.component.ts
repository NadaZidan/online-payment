import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  
  event: EventEmitter<any> = new EventEmitter();
  
  constructor(private bsModalRef: BsModalRef) {

  }

  deletePost(postId: number) {
    this.event.emit('OK');
    this.bsModalRef.hide();
  }

  onClose() {
    this.bsModalRef.hide();

  }
  ngOnInit() {
  }

}
