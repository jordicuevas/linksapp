import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { LoginMessages } from '../../../../core/messages/en.login.message';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginMessages = LoginMessages;
  loading = false;
  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  login() {
    if (this.loginForm.valid) {
      this.loading = true;

      this.loginService.login().subscribe(
        (userData: any) => {
          if (
            userData[0].username === this.loginForm.get('username')?.value &&
            userData[0].password === this.loginForm.get('password')?.value
          ) {
            let userinfo = {
              username: this.loginForm.get('username')?.value,
              fullname: userData[0].fullname,
            };
            localStorage.setItem('userprofile', JSON.stringify(userinfo));
            localStorage.setItem('token', JSON.stringify(userData[0].token));
            this.toastr.success(this.loginMessages.successlogin);

            this.router.navigateByUrl('/dashboard');
          } else {
            this.loading = false;
            this.toastr.error(this.loginMessages.incorrectData);
          }
        },
        (error) => {},
        () => {
          this.loading = false;
        }
      );
    }
  }
  signup() {
    this.router.navigateByUrl('/auth/signup');
  }
}
