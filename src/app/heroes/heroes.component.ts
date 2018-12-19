import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { HEROES } from '../mock-heroes';
import { HeroeService } from '../heroe.service';

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

  heroes: Heroe[];
  
  constructor(private heroeService: HeroeService) { }

  ngOnInit() {
    //Se pone la logica para la inicialización
    this.getHeroes();
  }

  selectedHeroe: Heroe;
  onSelect(heroe: Heroe): void {
    this.selectedHeroe = heroe;
  }

  getHeroes(): void {
    this.heroeService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
