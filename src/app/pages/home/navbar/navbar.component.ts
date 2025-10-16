import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'; 
import { 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonMenuButton, 
  IonButton, 
  IonIcon 
} from '@ionic/angular/standalone'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    IonToolbar, 
    IonTitle, 
    IonButtons, 
    IonMenuButton, 
    IonButton, 
    IonIcon,
    RouterLink, 
    RouterLinkActive
  ],
  standalone: true 
})
export class NavbarComponent {

  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['/login']); 
  }
}