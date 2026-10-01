import { Component } from '@angular/core';
import { MovieFormComponent } from './movie-form/movie-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieFormComponent],
  template: `
    <app-movie-form></app-movie-form>
  `
})
export class App {
}