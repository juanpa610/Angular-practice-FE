import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  name: string = 'spiderman';
  age: number = 45;

  get capitalizeName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = this.name == 'spiderman' ? 'ironman' : 'spiderman';
  }
  changeAge():void {
    this.age = 34;
  }

  resetForm(): void {
    this.name = 'spiderman';
    this.age = 45;
    // document.querySelectorAll('h1')!.forEach((e) => e.innerHTML = 'jsjsjs');
  }

}
