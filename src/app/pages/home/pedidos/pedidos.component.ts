import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class PedidosComponent {
  pedidos = [
    { id: 1, mesa: 3, usuario: { nombre: 'Juan' }, estado: 'Pendiente' },
    { id: 2, mesa: 5, usuario: { nombre: 'Ana' }, estado: 'Preparando' },
    { id: 3, mesa: 2, usuario: { nombre: 'Luis' }, estado: 'Listo' }
  ];

  getColorEstado(estado: string) {
    switch (estado) {
      case 'Pendiente': return 'warning';
      case 'Preparando': return 'primary';
      case 'Listo': return 'success';
      default: return 'medium';
    }
  }

  viewPedido(pedido: any) {
    console.log('Ver pedido', pedido);
  }

  nextEstado(pedido: any) {
    const estados = ['Pendiente', 'Preparando', 'Listo', 'Entregado'];
    const index = estados.indexOf(pedido.estado);
    pedido.estado = estados[(index + 1) % estados.length];
  }
}
