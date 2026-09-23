import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie';

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('super-giper-duper-new-repository');

  title2 = '';
  year: number | null = null;
  rating: number | null = null;

  constructor(private movieService: MovieService) {}

  get movies() {
    return this.movieService.getMovies();
  }

  onAddMovie() {
    if (!this.title2 || this.year === null || this.rating === null) {
      return;
    }
    this.movieService.addMovie(this.title2, this.year, this.rating);
    this.title2 = '';
    this.year = null;
    this.rating = null;
  }

  onRemoveMovie(id: number) {
    this.movieService.removeMovie(id);
  }
}
/// simple