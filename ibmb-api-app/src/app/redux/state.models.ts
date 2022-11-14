import { IMovie } from '../ibmb/models/movies.model';

export interface AppState {
  movies: MoviesState;
}

export interface MoviesState {
  movies: IMovie[];
  loading: boolean;
  loaded: boolean;
}

export const initialMoviesState: MoviesState = {
  movies: [],
  loading: false,
  loaded: false,
};

export const initialState: AppState = {
  movies: initialMoviesState,
};
