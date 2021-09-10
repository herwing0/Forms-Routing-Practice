import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro-component',
  templateUrl: './form-registro-component.component.html',
  styleUrls: ['./form-registro-component.component.css']
})
export class FormRegistroComponentComponent implements OnInit {

  registerForm: FormGroup
  showJson: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.RegisterForm()
  }

  public RegisterForm(){
    this.registerForm = this.fb.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.required],
      telefono: [""],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    })
  }


  public submitRegistro(){
    console.log(this.registerForm.value)
    this.showJson = true;

  }
}
