import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class RolesComponent {
  roles = [
    { id: 1, nombre: 'Administrador' },
    { id: 2, nombre: 'Mesero' },
    { id: 3, nombre: 'Cocinero' }
  ];

  openAddRole() {
    console.log('Agregar rol');
  }

  editRole(rol: any) {
    console.log('Editar rol', rol);
  }

  deleteRole(id: number) {
    this.roles = this.roles.filter(r => r.id !== id);
  }
}
