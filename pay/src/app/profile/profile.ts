import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-profile',
  imports: [FormsModule,
    CardModule,
    AvatarModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,RouterLink],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit {
  user: any;

  ngOnInit(): void {
    // Simulated dynamic data (you can replace this with API call)
    this.user = {
      name: 'Kajal Gupta',
      email: 'kajal@example.com',
      phone: '+91 9876543210',
      profileImage: 'https://i.pravatar.cc/150?img=8',
      joinedDate: '2024-06-15',
      walletBalance: 2500,
      address: 'Indore, Madhya Pradesh, India'
    };
  }

  updateProfile() {
    alert('Update Profile Clicked!');
    // Call update API here
  }
}
