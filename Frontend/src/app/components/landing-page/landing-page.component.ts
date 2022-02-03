import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/models/movie';
import { ActivatedRoute } from '@angular/router';
import { Providers } from 'src/app/models/providers';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  latestMovies: any = [];
  currentMovie: Movie = {};

  searchMovies: any = [];
  search: Movie = {};
  isSearchMovie: boolean = true;

  currentIndex = -1;
  title = '';

  constructor(private movieService: MovieService, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe(
    (data: any) => {
      this.latestMovies = data.results;
      //console.log(data.results);
    });
  }

  setActive(latestMovies: Movie, index: number): void {
    this.currentMovie = latestMovies;
    this.currentIndex = index;
  }

  searchMovie(){
    this.currentMovie = {};
    this.currentIndex -1;

    this.movieService.searchMovie(this.title).subscribe((res: any) => {
      this.searchMovies = res.results;
      if(this.searchMovie.length == 0)
      {
        this.isSearchMovie = false;
      }
      console.log(this.searchMovies);
      // next: (data) => {
      //   this.searchMovies = data.search;
      //   console.log(this.searchMovies);
      // },
      // error: (e) => console.error(e)
    });
  }
}
