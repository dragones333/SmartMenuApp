import { Routes } from '@angular/router';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { SidebarComponent } from './pages/home/sidebar/sidebar.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { UsuariosComponent } from './pages/home/usuarios/usuarios.component';
import { RolesComponent } from './pages/home/roles/roles.component';
import { PlatillosComponent } from './pages/home/platillos/platillos.component';
import { PedidosComponent } from './pages/home/pedidos/pedidos.component';
import { ClientesComponent } from './pages/home/clientes/clientes.component';
import { InventarioComponent } from './pages/home/inventario/inventario.component';
import { ProveedoresComponent } from './pages/home/proveedores/proveedores.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'platillos', component: PlatillosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'proveedores', component: ProveedoresComponent },

  { path: '**', redirectTo: 'dashboard' } 
];
