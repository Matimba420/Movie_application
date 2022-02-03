import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

const baseUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=b47305b354135433a8512ad26ed78b50&language=en-US&page=1";
const movieUrl = "https://api.themoviedb.org/3/movie"
const movieID =`?api_key=b47305b354135433a8512ad26ed78b50&language=en-US`;
const search = `https://api.themoviedb.org/3/search/movie?api_key=b47305b354135433a8512ad26ed78b50&query=`;

const watch = "watch/providers?api_key=b47305b354135433a8512ad26ed78b50";

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  getAllMovies() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]>{
    return this.http.get<any[]>(baseUrl);
  }

  getOneMovie(id:any): Observable<Movie> {
    return this.http.get(`${movieUrl}/${id}${movieID}`);
  }

  getCast(id:any): Observable<Movie> {
    return this.http.get(`${movieUrl}/${id}/credits${movieID}`);
  }

  searchMovie(title: any): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${search}${title}`);
  }

  getProvider(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${movieUrl}/${id}/${watch}`);
  }
}
