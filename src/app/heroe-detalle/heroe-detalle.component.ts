import { Component, OnInit , Input } from '@angular/core';
import { Heroe } from '../heroe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroeService }  from '../heroe.service';


@Component({
  selector: 'app-heroe-detalle',
  templateUrl: './heroe-detalle.component.html',
  styleUrls: ['./heroe-detalle.component.css']
})
export class HeroeDetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private heroeService: HeroeService,
    private location: Location) { }

  ngOnInit() {
    this.getHeroe();
  }

  @Input() heroe: Heroe;

  getHeroe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroeService.getHeroe(id)
      .subscribe(heroe => this.heroe = heroe);
  }

  regresar(): void {
    this.location.back();
  }
}
