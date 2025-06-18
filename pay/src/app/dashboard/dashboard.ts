import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { Checkb } from '../checkb/checkb';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  imports: [RouterLink,SidebarModule,
    ButtonModule,
    PanelModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,CommonModule,RouterLink],
  styleUrls: ['./dashboard.css'],
  providers:[MessageService, ConfirmationService],
})
export class Dashboard {
  [x: string]: any;
  showSidebar: boolean = true;
  balance: number = 5000;
  transactions = [
    { id: 1, type: 'Add', amount: 1000, date: new Date() },
    { id: 2, type: 'Pay', amount: 500, date: new Date() }
  ];
user: any;

  constructor(private messageService: MessageService, private confirm: ConfirmationService,private router: Router) {}

  addMoney() {
    this.balance += 500;
    this.transactions.push({ id: Date.now(), type: 'Add', amount: 500, date: new Date() });
    this.messageService.add({ severity: 'success', summary: 'Money Added', detail: '+ ₹500' });
    this.router.navigate(['/addmoney'])
  }

  payMoney() {
    if (this.balance >= 200) {
      this.balance -= 200;
      this.transactions.push({ id: Date.now(), type: 'Pay', amount: 200, date: new Date() });
      this.messageService.add({ severity: 'success', summary: 'Money Paid', detail: '- ₹200' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Insufficient Balance', detail: 'Payment Failed' });
    }
    this.router.navigate(['/paymoney'])
  }

  deleteTransaction(id: number) {
    this.confirm.confirm({
      message: 'Are you sure you want to delete this transaction?',
      accept: () => {
        this.transactions = this.transactions.filter(t => t.id !== id);
        this.messageService.add({ severity: 'info', summary: 'Transaction Deleted' });
      }
    });
  }
 
  seet(){
    this.router.navigate(['/sth']);
  }
  deet(){
    this.router.navigate(['/dth']);
  }
  profile(){
    this.router.navigate(['/profile']);
  }
  logout(){
    this.router.navigate(['/logout']);
  }
  history(){
    this.router.navigate(['/user']);
  }
 
}
