import { Component } from '@angular/core';
import { Hero } from 'src/app/modelos/hero';
import { HEROES } from 'src/app/modelos/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;

  selectedHero?: Hero;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}