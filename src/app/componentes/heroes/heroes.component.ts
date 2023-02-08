import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/modelos/hero';
import { HEROES } from 'src/app/modelos/mock-heroes';
import { HeroService } from 'src/app/servicios/hero.service';
import { MessageService } from 'src/app/servicios/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}