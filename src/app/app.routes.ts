import { Routes } from '@angular/router';
import { FighterComponent } from './components/fighter/fighter.component';
import { NewFighterComponent } from './components/new-fighter/new-fighter.component';
import { FighterDetailsComponent } from './components/fighter-details/fighter-details.component';

export const routes: Routes = [
    {path: 'fighter', component: FighterComponent },
    {path: '', component: FighterComponent },
    {path: 'newFighter', component: NewFighterComponent },
    {path: 'fighterDetails/:id', component: FighterDetailsComponent },
    {path: 'fighterDelete/:id', component: FighterComponent },


];
