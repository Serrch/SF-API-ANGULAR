import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FighterService } from '../../services/fighter.service';
import { FighterInterface } from '../../../interfaces/fighter.interface';

@Component({
  selector: 'app-fighter-details',
  standalone: true,
  imports: [],
  templateUrl: './fighter-details.component.html',
  styleUrl: './fighter-details.component.scss',
})
export class FighterDetailsComponent {
  idPeleador: number = 0;
  fighter: FighterInterface | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fighterService: FighterService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const rawId = params['id'].replace(':', '');
      this.idPeleador = +rawId;
      this.getFighter();
    });
  }

  getFighter() {
    this.fighterService.getFighter(this.idPeleador).subscribe({
      next: (result) => {
        this.fighter = result.fighter;
      },
      error: (err) => {
        console.error('Error al obtener el peleador:', err);
      },
    });
  }

  deleteFighter() {
    this.fighterService.delFighter(this.idPeleador).subscribe({
      next: () => {
        console.log('Peleador eliminado');
        this.router.navigate(['/fighter']); // Redirigir a la lista
      },
      error: (err) => {
        console.error('Error al eliminar el peleador:', err);
      },
    });
  }

  updateFighter() {
    const updatedData = new FormData();
    updatedData.append('nombre', 'Nuevo nombre'); 
    updatedData.append('historia', 'Nueva historia');
    updatedData.append('estilo', 'Nuevo estilo');

    this.fighterService.updateFighter(this.idPeleador, updatedData).subscribe({
      next: (result) => {
        console.log('Peleador actualizado', result);
        this.getFighter(); // Refresca los datos en la vista
      },
      error: (err) => {
        console.error('Error al actualizar el peleador:', err);
      },
    });
  }
}
