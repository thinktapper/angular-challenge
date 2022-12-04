import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput, of } from 'rxjs';
import { PodcastGenre } from '@core/models/podcast-genre';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PodcastService
{
  constructor(
    private httpClient: HttpClient,
  ) { }

  getPodcastGenres() : Observable<PodcastGenre[]>
  {
    return this.httpClient
      .get<PodcastGenre[]>("/assets/data/podcasts-by-genre.json")
      .pipe(catchError(this.handleError));
  }

  handleError(error: any, caught: Observable<PodcastGenre[]>) : ObservableInput<any> {
    return of([]);
  }
}