import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from '../actions/movies.actions';
import { initialMoviesState, MoviesState } from '../state.models';

export const moviesReducer = createReducer(
  initialMoviesState,
  on(
    MoviesActions.fetchMovies,
    (state): MoviesState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    MoviesActions.fetchMoviesSuccess,
    (state, { movies }): MoviesState => ({
      ...state,
      movies: [...movies],
      loading: false,
      loaded: true,
    })
  ),
  on(
    MoviesActions.fetchMoviesFailure,
    (state): MoviesState => ({
      ...state,
      loading: false,
      loaded: true,
    })
  )
);
