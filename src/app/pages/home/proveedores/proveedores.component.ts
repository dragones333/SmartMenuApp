import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ProveedoresComponent {
  proveedores = [
    { id: 1, nombre: 'Proveedor A', telefono: '1234567890', correoProveedor: 'a@proveedor.com' },
    { id: 2, nombre: 'Proveedor B', telefono: '0987654321', correoProveedor: 'b@proveedor.com' }
  ];

  openAddProveedor() {
    console.log('Agregar proveedor');
  }

  editProveedor(prov: any) {
    console.log('Editar proveedor', prov);
  }

  deleteProveedor(id: number) {
    this.proveedores = this.proveedores.filter(p => p.id !== id);
  }
}
