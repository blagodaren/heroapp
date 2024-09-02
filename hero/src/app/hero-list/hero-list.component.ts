import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import {TuiAccordion, TuiChip} from '@taiga-ui/kit';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [TuiAccordion, TuiChip],
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent {
  public heroes = [
    {
      name: 'Андрей Неудержимый',
      power: 20,
      level: 10,
      abilities: ['Быстрая регенерация', 'Супер прочность']
    },
    {
      name: 'Гиена Огненная',
      power: 20,
      level: 15,
      abilities: ['Огненное дыхание', 'Пирокинез']
    },
    {
      name: 'Мирослава Злобная',
      power: 21,
      level: 20,
      abilities: ['Самопроизвольное возгорание', 'Закатывание глаз', 'Побег из тюрьмы']
    },
    {
      name: 'Иван Простой',
      power: 9,
      level: 5,
      abilities: ['Упрямство', 'Невидимость в толпе']
    }
  ];

  private abilities = ['Сила', 'Быстрота', 'Огненное дыхание', 'Полёт', 'Регенерация', 'Магия'];

  constructor(private heroService: HeroService) {}

  // ngOnInit(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // editHero(hero): void {
  //   // Открытие модального окна для редактирования
  //   this.heroService.editHero(hero);
  // }
}
