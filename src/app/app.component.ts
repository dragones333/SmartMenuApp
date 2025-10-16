import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonRouterOutlet,
  IonApp 
} from '@ionic/angular/standalone'; 
import { SidebarComponent } from './pages/home/sidebar/sidebar.component'; 
import { NavbarComponent } from './pages/home/navbar/navbar.component'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    CommonModule, 
    IonRouterOutlet,
    IonApp, 
    SidebarComponent, 
    NavbarComponent 
  ],
  standalone: true
})
export class AppComponent {
  isLoggedIn: boolean = false; 

  constructor() {
  }
}