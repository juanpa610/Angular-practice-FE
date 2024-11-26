import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  deletedHero?: string = '';

  deleteLastHero(): void {
    if (this.heroNames.length) {
      this.deletedHero = this.heroNames.pop();
    }
  }


}
