// platillos.component.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Platillo {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  disponible: boolean;
  imagen?: string;
}

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlatillosComponent {
  searchText: string = '';

  platillos: Platillo[] = [
    { id: 1, nombre: 'Tacos', descripcion: 'Deliciosos tacos', precio: 50, disponible: true },
    { id: 2, nombre: 'Enchiladas', descripcion: 'Ricas enchiladas', precio: 70, disponible: false },
    // más platillos
  ];

  get filteredPlatillos() {
    if (!this.searchText) return this.platillos;
    return this.platillos.filter(p =>
      p.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  openAddPlatillo() { console.log('Agregar platillo'); }
  editPlatillo(p: Platillo) { console.log('Editar', p); }
  deletePlatillo(id: number) {
    console.log('Eliminar', id);
    this.platillos = this.platillos.filter(p => p.id !== id);
  }
}
