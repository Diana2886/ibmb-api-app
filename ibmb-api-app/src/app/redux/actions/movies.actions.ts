import { createAction, props } from '@ngrx/store';
import { IMovie } from 'src/app/ibmb/models/movies.model';

const actionSource = '[Main Page]';

export const fetchMovies = createAction(`${actionSource} Fetch Movies`);

export const fetchMoviesSuccess = createAction(
  `${actionSource} Fetch Movies Success`,
  props<{ movies: IMovie[] }>()
);

export const fetchMoviesFailure = createAction(`${actionSource} Fetch Movies Failure`);
