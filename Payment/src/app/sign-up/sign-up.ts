import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
signupModel: any;
SignupForm: any;

signupForm: FormGroup;

constructor(private fb: FormBuilder) {
  this.signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    gender: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}

onSubmit() {
  if (this.signupForm.valid) {
    console.log(this.signupForm.value);
    alert('Registration Successful!');
    this.signupForm.reset();
  } else {
    this.signupForm.markAllAsTouched();
  }
}
}


