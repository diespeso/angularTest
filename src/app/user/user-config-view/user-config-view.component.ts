import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-config-view',
  templateUrl: './user-config-view.component.html',
  styleUrls: ['./user-config-view.component.css']
})
export class UserConfigViewComponent implements OnInit {

  public editEmail: boolean;

  constructor() {
    this.editEmail = false;
  }

  ngOnInit(): void {
  }

  handleChangeEmail() {
    this.editEmail = true;
  }

  handleChangePassword() {

  }

}
