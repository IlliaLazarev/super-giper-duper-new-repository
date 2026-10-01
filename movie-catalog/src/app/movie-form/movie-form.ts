import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Movie {
  title: string;
  director: string;
  description: string;
}

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css'
})
export class MovieFormComponent {

  newMovie: Movie = {
    title: '',
    director: '',
    description: ''
  };

  movies: Movie[] = [];

  submitted = false;

  addMovie(form: any): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.movies.push({
      title: this.newMovie.title,
      director: this.newMovie.director,
      description: this.newMovie.description
    });

    form.resetForm();

    this.submitted = false;
  }
}