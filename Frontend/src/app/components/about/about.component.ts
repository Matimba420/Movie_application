import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/models/cast';
import { Providers } from 'src/app/models/providers';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  current_provided_movies : any;
  test = '';

  @Input() currentMovie: Movie = {
    id: 0,
    title: '',
    overview: '',
    release_date: '',
    poster_path: '',
    vote_average: '',
    runtime: 0
  } 

  arrayProvider: any = [
    'AR', 'BO', 'CL', 'CO', 'CL', 'EC', 'GT', 'HN', 'MX', 'PE', 'PL', 'PY' 
  ]

  curentProvider: Providers = {}
  latestProvider: any = [];

  providerMovie: any = [];
  movieProvider: Providers = {};

  "genres":[
    {
       "id":28,
       "name":"Action"
    },
    {
       "id":12,
       "name":"Adventure"
    },
    {
       "id":16,
       "name":"Animation"
    },
    {
       "id":35,
       "name":"Comedy"
    },
    {
       "id":80,
       "name":"Crime"
    },
    {
       "id":99,
       "name":"Documentary"
    },
    {
       "id":18,
       "name":"Drama"
    },
    {
       "id":10751,
       "name":"Family"
    },
    {
       "id":14,
       "name":"Fantasy"
    },
    {
       "id":36,
       "name":"History"
    },
    {
       "id":27,
       "name":"Horror"
    },
    {
       "id":10402,
       "name":"Music"
    },
    {
       "id":9648,
       "name":"Mystery"
    },
    {
       "id":10749,
       "name":"Romance"
    },
    {
       "id":878,
       "name":"Science Fiction"
    },
    {
       "id":10770,
       "name":"TV Movie"
    },
    {
       "id":53,
       "name":"Thriller"
    },
    {
       "id":10752,
       "name":"War"
    },
    {
       "id":37,
       "name":"Western"
    }
 ]

 //Actors of the movie
  actors: any = [];
  cast: Cast = {
    name: '',
    profile_path: '',
    character: ''
  };

  //Where to watch the movie
  watch: any = [];
  provider: Providers = {
    provider_name: ''
  }

  constructor(
    private route: ActivatedRoute, private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getOneMovie(this.route.snapshot.params["id"]);
    this.getCast(this.route.snapshot.params["id"]);
    this.getProvider(this.route.snapshot.params["id"]);
  }


  getOneMovie(id: any){
    this.movieService.getOneMovie(id).subscribe((data: any)=>{
      this.currentMovie = data;
      data = {
        title: this.currentMovie.title,
        poster_path: this.currentMovie.poster_path,
        release_date: this.currentMovie.release_date,
        runtime: this.currentMovie.runtime,
        overview: this.currentMovie.overview,
        vote_average: this.currentMovie.vote_average
      }
    });
  }

  getCast(id: any){
    this.movieService.getCast(id).subscribe((data: any)=>{
      this.actors = data.cast;
      //console.log(this.actors);
    })
  }

  getProvider(id: any){
   this.movieService.getProvider(id).subscribe((data: any) =>
   {
     console.log(data);
      this.current_provided_movies = data.results.CA.rent[0].provider_name;
      
      console.log(this.current_provided_movies);
   });
  }

}
