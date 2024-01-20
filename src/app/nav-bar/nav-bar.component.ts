import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    AppComponent,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Output() idOut = new EventEmitter();

  navigate(id : any) { 
    this.idOut.emit(id);
  }

}
