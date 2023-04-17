import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    protected auth: AuthService,
    protected snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    console.log(this.email, this.password);
    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: (res: null) => {
        // TODO: add token to interceptors
        // https://daily-dev-tips.com/posts/angular-adding-a-token-to-each-api-request/
      },
      error: (err: Error) => {
        this.snackBar.open(err.toString(), undefined, {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 2000,
      });
      }
    })
  }

}
