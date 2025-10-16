import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonMenu,
  IonToolbar,
  IonTitle,
  IonRouterOutlet,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    IonContent,
    IonHeader,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonMenu,
    IonToolbar,
    IonTitle,
    IonRouterOutlet,
  ],
  standalone: true,
})
export class SidebarComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}
