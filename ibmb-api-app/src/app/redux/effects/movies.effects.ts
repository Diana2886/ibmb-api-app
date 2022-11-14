import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import MoviesService from '../../ibmb/services/movies.service';
import * as MoviesActions from '../actions/movies.actions';

@Injectable({ providedIn: 'any' })
export default class MoviesEffects {
  getMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.fetchMovies),
      switchMap(() =>
        this.moviesService.getResponse().pipe(
          map((movies) => MoviesActions.fetchMoviesSuccess({ movies })),
          catchError(() => of(MoviesActions.fetchMoviesFailure()))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService,
  ) {}
}
