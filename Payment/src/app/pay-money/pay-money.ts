import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay-money',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './pay-money.html',
  styleUrl: './pay-money.css'
})
export class PayMoney {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      receiverPhone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      amount: ['', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]]
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const data = this.paymentForm.value;
      console.log('Payment Sent:', data);
      alert(`₹${data.amount} sent to ${data.receiverPhone} successfully!`);
      this.paymentForm.reset();
    } else {
      this.paymentForm.markAllAsTouched();
    }
  }

}
