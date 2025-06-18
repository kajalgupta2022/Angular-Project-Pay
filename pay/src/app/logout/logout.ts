import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logout',
  imports: [CommonModule,FormsModule],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout {

}
