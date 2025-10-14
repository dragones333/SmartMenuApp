import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class InventarioComponent {
  inventario = [
    { id: 1, nombre_insumo: 'Tomate', cantidad: 50, unidad: 'kg' },
    { id: 2, nombre_insumo: 'Queso', cantidad: 20, unidad: 'kg' },
    { id: 3, nombre_insumo: 'Harina', cantidad: 100, unidad: 'kg' }
  ];

  openAddInsumo() {
    console.log('Abrir formulario para agregar insumo');
  }

  editInsumo(item: any) {
    console.log('Editar insumo', item);
  }

  deleteInsumo(id: number) {
    console.log('Eliminar insumo con id', id);
    this.inventario = this.inventario.filter(item => item.id !== id);
  }
}
