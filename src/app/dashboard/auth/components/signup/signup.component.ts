import { Component, OnInit } from '@angular/core';
import { SignUpMessages } from '../../../../core/messages/en.signup.message';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  signupMessages = SignUpMessages;

  constructor(private _fb: FormBuilder, private router: Router) {
    this.signupForm = this._fb.group({
      fullname: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  signup() {}
  login() {
    this.router.navigateByUrl('/auth/login');
  }
}
