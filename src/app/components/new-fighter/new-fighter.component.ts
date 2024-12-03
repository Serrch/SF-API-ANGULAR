import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FighterService } from '../../services/fighter.service';

@Component({
  selector: 'app-new-fighter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-fighter.component.html',
  styleUrl: './new-fighter.component.scss'
})


export class NewFighterComponent {
  fighterData = {
    nombre: '',
    historia: '',
    estilo: ''
  };
  icono: File | null = null;
  img: File | null = null;

  constructor(private fighterService: FighterService) {}

  onFileChange(event: any, field: 'icono' | 'img') {
    const file = event.target.files[0];
    if (field === 'icono') {
      this.icono = file;
    } else if (field === 'img') {
      this.img = file;
    }
  }

  createFighter() {
    const formData = new FormData();
    formData.append('nombre', this.fighterData.nombre);
    formData.append('historia', this.fighterData.historia);
    formData.append('estilo', this.fighterData.estilo);
    if (this.icono) {
      formData.append('icono', this.icono);
    }
    if (this.img) {
      formData.append('img', this.img);
    }

    this.fighterService.createFighter(formData).subscribe({
      next: (response) => {
        console.log('Peleador creado exitosamente:', response);
        alert('Peleador creado exitosamente');
      },
      error: (error) => {
        console.error('Error al crear el peleador:', error);
        alert('Hubo un error al crear el peleador');
      }
    });
  }
}
