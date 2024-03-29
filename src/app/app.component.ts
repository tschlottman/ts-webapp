import { Component, Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertsComponent } from './certs/certs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HomeComponent,
    NavBarComponent,
    AboutComponent,
    ExperienceComponent,
    CertsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'ts-webapp';
  id : any;

  getId(navId : any) {
    this.id = document.getElementById(navId);    
    this.scroll(this.id);
  }

  scroll(el : HTMLElement) {
    if(el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
