import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroe: Heroe = {
    id: 1,
    nombre: 'Superman'
  };

  heroes = HEROES;
  
  constructor() { }

  ngOnInit() {
    //Se pone la logica para la inicialización
  }

  selectedHeroe: Heroe;
  onSelect(heroe: Heroe): void {
    this.selectedHeroe = heroe;
  }

}
