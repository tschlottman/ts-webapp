import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  tod = new String();
  isDay = new Boolean;
  today = new Date();

  ngOnInit(): void {
    let hour = this.today.getHours();
    if (hour > 4 && hour < 11) {
      this.tod = 'Good Morning, '
      this.isDay = true;
    } else if (hour > 11 && hour < 16) {
      this.tod = 'Good Afternoon, '
      this.isDay = true;
    } else {
      this.tod = 'Good Evening, '
      this.isDay = false;
    }
  }

}
