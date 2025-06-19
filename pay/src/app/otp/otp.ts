import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-otp',
  imports: [ FormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    MessageModule,RouterLink],
  templateUrl: './otp.html',
  styleUrls: ['./otp.css']
})
export class Otp {
  otpCode: string = '';
  expectedOtp: string = '123456'; // In real app, this comes from backend
  errorMessage = '';
  successMessage = '';

  verifyOTP() {
    if (this.otpCode === this.expectedOtp) {
      this.successMessage = 'OTP verified successfully!';
      this.errorMessage = '';
      // Navigate or continue payment process
    } else {
      this.errorMessage = 'Incorrect OTP. Please try again.';
      this.successMessage = '';
    }
  }

  resendOTP() {
    this.otpCode = '';
    this.errorMessage = '';
    this.successMessage = 'OTP resent successfully!';
    // TODO: Trigger resend API
  }
}
