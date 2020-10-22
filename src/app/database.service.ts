import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }
  result: any;

  getActors(){
    return this.http.get("http://localhost:8080/actors");
  }
  getActor(id: string){
    let url = "http://localhost:8080/actors/" + id;
    return this.http.get(url);
  }
  getActors2000(){
    let url = "http://localhost:8080/actors2000";
    return this.http.get(url);
  }
  createActor(data){
    return this.http.post("http://localhost:8080/actors", data, httpOptions);
  }
  updateActor(id, data){
    let url = "http://localhost:8080/actors/" + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteActor(id){
    let url = "http://localhost:8080/actors/" + id;
    return this.http.delete(url, httpOptions);
  }
  
  getMovies(){
    return this.http.get("http://localhost:8080/movies");
  }
  createMovie(data){
    return this.http.post("http://localhost:8080/movies", data, httpOptions);
  }
  deleteMovie(id){
    let url = "http://localhost:8080/movies/" + id;
    return this.http.delete(url, httpOptions);
  }
  deleteMovies(year){
    let url = "http://localhost:8080/movies/before/" + year;
    return this.http.delete(url, httpOptions);
  }
  addActor2Movie(movie_id, actor_data){
    let url = "http://localhost:8080/movies/actors/" + movie_id;
    return this.http.post(url, actor_data, httpOptions);
  }

}
