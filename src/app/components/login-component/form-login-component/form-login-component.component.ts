import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-login-component',
  templateUrl: './form-login-component.component.html',
  styleUrls: ['./form-login-component.component.css']
})
export class FormLoginComponentComponent implements OnInit {
  loginForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.LoginForm();
  }

  public LoginForm(){
    this.loginForm = this.fb.group({
      user: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    })
  }

  public submitLogin(){
    console.log(this.loginForm.value)

  }

}
