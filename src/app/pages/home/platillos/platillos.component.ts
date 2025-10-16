import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonContent, 
  IonSearchbar, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCard, 
  IonBadge, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonItem, 
  AlertController
} from '@ionic/angular/standalone';

interface Platillo {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  disponible: boolean;
}

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonButtons, 
    IonButton, 
    IonIcon, 
    IonContent, 
    IonSearchbar, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonCard, 
    IonBadge, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonItem
  ]
})
export class PlatillosComponent implements OnInit {

  searchText: string = '';
  platillos: Platillo[] = [];
  filteredPlatillos: Platillo[] = [];

  constructor(
    private router: Router, 
    private alertController: AlertController
  ) {
  }

  set searchTextValue(value: string) {
    this.searchText = value;
    this.filterPlatillos();
  }

  get searchTextValue(): string {
    return this.searchText;
  }

  ngOnInit() {
    this.loadPlatillos();
  }

  loadPlatillos() {
    
    this.platillos = [
      { id: 1, nombre: 'Lasaña Clásica', descripcion: 'Lasaña tradicional de carne, salsa bechamel y queso parmesano gratinado.', precio: 15.50, imagen: 'url_1', disponible: true },
      { id: 2, nombre: 'Sopa Azteca', descripcion: 'Caldo de pollo con tiras de tortilla frita, queso, aguacate, crema y chile pasilla.', precio: 8.00, imagen: 'url_2', disponible: true },
      { id: 3, nombre: 'Tacos al Pastor', descripcion: 'Cinco tacos de pastor con piña, cebolla y cilantro.', precio: 12.00, imagen: 'url_3', disponible: false },
    ];
    this.filteredPlatillos = [...this.platillos];
  }

  filterPlatillos() {
    if (!this.searchText || this.searchText.trim() === '') {
      this.filteredPlatillos = [...this.platillos];
      return;
    }

    const lowerCaseSearch = this.searchText.toLowerCase();
    this.filteredPlatillos = this.platillos.filter(platillo => {
      return platillo.nombre.toLowerCase().includes(lowerCaseSearch) ||
             platillo.descripcion.toLowerCase().includes(lowerCaseSearch);
    });
  }

  openAddPlatillo() {
    this.router.navigate(['/platillos/crear']); 
  }

  editPlatillo(platillo: Platillo) {
    this.router.navigate(['/platillos/editar', platillo.id]);
  }

  async deletePlatillo(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar este platillo? Esta acción es permanente.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          cssClass: 'alert-danger',
          handler: () => {
            console.log(`Eliminando platillo con ID: ${id}`);
            this.platillos = this.platillos.filter(p => p.id !== id);
            this.filterPlatillos();
          }
        }
      ]
    });

    await alert.present();
  }
}