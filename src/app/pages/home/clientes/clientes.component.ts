// clientes.component.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

interface Cliente {
  id: number;
  nombre: string;
  telefono: string;
  correoCliente: string;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ClientesComponent {
  clientes: Cliente[] = [
    { id: 1, nombre: 'Juan Pérez', telefono: '1234567890', correoCliente: 'juan@mail.com' },
    { id: 2, nombre: 'Ana Gómez', telefono: '0987654321', correoCliente: 'ana@mail.com' },
  ];

  openAddCliente() {
    console.log('Abrir formulario para agregar cliente');
  }

  editCliente(cliente: Cliente) {
    console.log('Editar cliente:', cliente);
  }

  deleteCliente(id: number) {
    console.log('Eliminar cliente con id:', id);
    this.clientes = this.clientes.filter(c => c.id !== id);
  }
}
