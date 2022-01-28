import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/models/cast';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() currentMovie: Movie = {


    id: 0,
    title: '',
    overview: '',
    release_date: '',
    poster_path: '',
    vote_average: '',
    runtime: 0
  } 

actors: any = [];
 cast: Cast = {
  name: '',
  profile_path: '',
  character: ''
 };

  constructor(
    private route: ActivatedRoute, private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getOneMovie(this.route.snapshot.params["id"]);
    this.getCast(this.route.snapshot.params["id"]);
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
    })
  }

  getCast(id: any){
    this.movieService.getCast(id).subscribe((data: any)=>{
      this.actors = data.cast;
      console.log(this.actors);
    })
  }

}
