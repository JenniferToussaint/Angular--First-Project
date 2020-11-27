import { Component, OnInit } from '@angular/core';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-project';
  films:any = [];

  constructor( 
  private Film: FilmService
  ) {}

 ngOnInit () {
   this.films = this.Film.films;
 }

 onAirAll() {
  this.Film.setOnAir();
 }

 onBRAll() {
  this.Film.setOnBR();
}
  
}
