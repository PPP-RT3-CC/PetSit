import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, startWith, type Observable } from 'rxjs';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  pets = [
    { name: 'Besbis', type: 'Cat', image: 'assets/images/cat.jpg' },
    { name: 'Batta', type: 'Duck', image: 'assets/images/duck.jpg' },
    { name: 'Charlie', type: 'Dog', image: 'assets/images/dog.jpg' },
    { name: 'Luna', type: 'Hamster', image: 'assets/images/hamster.jpg' },
    { name: 'Touta', type: 'Rabbit', image: 'assets/images/rabbit.jpg' },
  ];
   intervalTime = 3000;

  
  currentPet$: Observable<any> = interval(this.intervalTime).pipe(
    map(i => this.pets[i % this.pets.length]),
    startWith(this.pets[0])
  );

}
