import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon,
  IonMenu
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
    IonMenu
  ],
  standalone: true 
})
export class SidebarComponent {}