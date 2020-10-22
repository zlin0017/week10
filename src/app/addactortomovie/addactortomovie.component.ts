import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {
  moviesDB: any[] = [];
  actorsDB: any[] = [];
  actorId: string = "";
  movieId: string = "";

  constructor(private dbService: DatabaseService, private router: Router) {}
  onGetInfo(){
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }
  onSelectActor(actor){
    this.actorId = actor._id;
  }

  onSelectMovie(movie){
    this.movieId = movie._id;
  }
  onAddActor2Movie(){
    let obj = {"id": this.actorId};
    this.dbService.addActor2Movie(this.movieId, obj).subscribe(result => {
      this.onGetInfo();
      this.router.navigate(["/listmovies"]);
    });
  }
  ngOnInit(): void {
    this.onGetInfo();
  }

}
