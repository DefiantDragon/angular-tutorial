import { Injectable } from '@angular/core';
import { Hero } from './heroes/Hero';
import { HEROES } from './heroes/Mock_heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class heroService {

  getHeroes(): Observable<Hero[]> {
    //Try in future to make it so that the message is sent after fetching heroes
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}