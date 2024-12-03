import { Component, OnInit } from '@angular/core';
import { FighterService } from '../../services/fighter.service';
import { FighterInterface } from '../../../interfaces/fighter.interface';

@Component({
  selector: 'app-fighter',
  standalone: true,
  imports: [],
  templateUrl: './fighter.component.html',
  styleUrl: './fighter.component.scss'
})


export class FighterComponent implements OnInit{

  fighterList: FighterInterface[]=[];
  constructor(
    private fighterService: FighterService,
  ){}

  ngOnInit(): void {
    this.getFighter();
  }

  getFighter(){
    this.fighterService.getFighters().subscribe({
      next: (result) => {

        this.fighterList=result;
        console.log(this.fighterList);
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

}
