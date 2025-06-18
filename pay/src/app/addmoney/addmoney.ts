import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-money',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './addmoney.html',
  styleUrl: './addmoney.css'
})
export class AddMoney {
  moneyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.moneyForm = this.fb.group({
      amount: ['', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]]
    });
  }

  onSubmit() {
    if (this.moneyForm.valid) {
      const value = this.moneyForm.value.amount;
      console.log('Amount added:', value);
      
      this.moneyForm.reset();
    } else {
      this.moneyForm.markAllAsTouched();
    }
  }
}