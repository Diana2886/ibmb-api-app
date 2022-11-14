import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from '../state.models';

export const selectFeature = createFeatureSelector<MoviesState>('movies');

export const selectMovies = createSelector(selectFeature, (state: MoviesState) => state.movies);
