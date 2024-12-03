import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FighterComponent } from './components/fighter/fighter.component';
import { HeaderComponent } from './components/header/header.component';
import { NewFighterComponent } from './components/new-fighter/new-fighter.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FighterComponent, HeaderComponent, NewFighterComponent, CarrouselComponent,FooterComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SF_API_Angular2';

  showFighterList = true;

}
