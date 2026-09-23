import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
}

@Component({
  selector: 'app-movies',
  imports: [RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  movies: Movie[] = [
    { id: 1, title: 'Interstellar', year: 2014, rating: 9 },
    { id: 2, title: 'Avatar', year: 2009, rating: 8 },
    { id: 3, title: 'Titanic', year: 1997, rating: 7 },
  ];
}