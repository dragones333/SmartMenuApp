import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class DashboardComponent {
  pedidosPendientes: number = 5;
  totalClientes: number = 20;
  platillosDisponibles: number = 12;
  totalProveedores: number = 8;
}
