import { Component } from '@angular/core';

@Component({
  selector: 'app-checkb',
  templateUrl: './checkb.html',
  styleUrls: ['./checkb.css']
})
export class Checkb {
  walletBalance = 1575;
  lastUpdated = new Date();

  refreshBalance() {
    // Simulate refresh logic (you can replace this with actual API call)
    this.walletBalance = Math.floor(1000 + Math.random() * 2000); // Random balance
    this.lastUpdated = new Date();
  }
}

