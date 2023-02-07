import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../modelos/hero';
import { HEROES } from '../modelos/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
