import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, EMPTY, Subject, map, switchMap } from 'rxjs';
import { IMovie, IMoviesResponse } from '../models/movies.model';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  private readonly MOVIES_URL = '';

  public movies$ = new Subject<IMovie[]>();

  constructor(private http: HttpClient) {}

  private getMoviesResponse(): Observable<IMoviesResponse> {
    return this.http.get<IMoviesResponse>(this.MOVIES_URL).pipe(catchError(() => EMPTY));
  }

  public getResponse() {
    return this.getMoviesResponse().pipe(
      map((result: IMoviesResponse) => {
        this.movies$.next(result.items);
        return result.items;
      })
    );
  }
}
