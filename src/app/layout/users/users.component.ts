import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routerTransition()]

})
export class UsersComponent implements OnInit {
  usersList = [
    {
      userId: "1",
      userName: "Nada",
      userPhone: "01068952314",

    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
