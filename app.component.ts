import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Movie {
  title: string;
  year: number;
  rating: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies: Movie[] = [
    { title: 'Interstellar', year: 2014, rating: 9 },
    { title: 'Avatar', year: 2009, rating: 8 },
    { title: 'Titanic', year: 1997, rating: 7 }
  ];

  newMovie: Movie = {
    title: '',
    year: 2026,
    rating: 5
  };

  addMovie(): void {
    if (!this.newMovie.title.trim()) {
      return;
    }

    this.movies.push({
      title: this.newMovie.title.trim(),
      year: Number(this.newMovie.year),
      rating: Number(this.newMovie.rating)
    });

    this.newMovie = {
      title: '',
      year: 2026,
      rating: 5
    };
  }

  deleteMovie(index: number): void {
    this.movies.splice(index, 1);
  }

  getRatingClass(rating: number): string {
    if (rating >= 8) {
      return 'high';
    }

    if (rating >= 5) {
      return 'medium';
    }

    return 'low';
  }
}