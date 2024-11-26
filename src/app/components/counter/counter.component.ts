import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>Counter component</h1>

    <p>Counter: {{counter}}</p>

    <button class="btn btn-light me-1" (click)="incrementBy(1)">+1</button>
    <button class="btn btn-light" (click)="counter = 10">Reset Counter </button>
    <button class="btn btn-light ms-1" (click)="incrementBy(-2)">-1</button>
    `,
    standalone: false,
    styles: ``
})
export class CounterComponent {
    constructor() {
    }

    counter = 10;

    incrementBy(value: number): void {
        this.counter = this.counter + value;
    }
}