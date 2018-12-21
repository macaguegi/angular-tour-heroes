import { Injectable } from '@angular/core';
import { Heroe } from './heroe';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Heroe[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroeService: fetched heroes');
    return of(HEROES);
  }

  getHeroe(id: number): Observable<Heroe> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroeService: fetched heroe id=${id}`);
    return of(HEROES.find(heroe => heroe.id === id));
  }
}
