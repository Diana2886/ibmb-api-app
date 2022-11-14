import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchMovies } from 'src/app/redux/actions/movies.actions';
import { selectMovies } from 'src/app/redux/selectors/movies.selectors';
import { IMovie } from '../../models/movies.model';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  movies$ = new Observable<IMovie[]>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchMovies());
    this.movies$ = this.store.select(selectMovies);
    this.store.dispatch(fetchMovies());
    this.store.select(selectMovies);
  }
}
