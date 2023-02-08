import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../modelos/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(this.heroesUrl + '/' + id);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    this.messageService.add(`HeroService: added hero`);
    return this.http.post<Hero>(this.heroesUrl, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    this.messageService.add(`HeroService: updated hero id=${hero.id}`);
    return this.http.put<Hero>(this.heroesUrl, hero);
  }

  deleteHero(id: number): Observable<any> {
    this.messageService.add(`HeroService: deleted hero id=${id}`);
    return this.http.delete<any>(this.heroesUrl + '/' + id);
  }
}
