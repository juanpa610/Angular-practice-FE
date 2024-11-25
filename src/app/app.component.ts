import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = ' Hola Mundo-angular-practice-FE';
  counter  = 10;

  incrementBy(value: number):void{
    this.counter = this.counter + value;
  }

}
