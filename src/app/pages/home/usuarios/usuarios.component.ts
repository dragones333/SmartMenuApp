import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // <- IMPORTANTE
})
export class UsuariosComponent {
  searchText: string = '';

users = [
  { id: 1, nombre: 'Juan Pérez', correo: 'juan@mail.com', rol: { nombre: 'Admin' } },
  { id: 2, nombre: 'María López', correo: 'maria@mail.com', rol: { nombre: 'Mesero' } },
];

  get filteredUsers() {
  if (!this.searchText) return this.users;
  return this.users.filter(u =>
    u.nombre.toLowerCase().includes(this.searchText.toLowerCase())
  );
}



  openAddUser() {
    console.log('Abrir formulario para agregar usuario');
  }

  editUser(user: any) {
    console.log('Editar usuario', user);
  }

  deleteUser(userId: number) {
    console.log('Eliminar usuario con ID', userId);
  }
}
