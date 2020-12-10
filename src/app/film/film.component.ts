import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit { //on doit déclaré a l'interieur de la class
@Input() filmName: string; // Variable de type script
@Input() filmOnAir: string;
@Input() filmAffiche : string;
@Input() index: number;
@Input() synopsis: string;
@Input() date: string;
@Input() id: number;

  constructor(
      private Film: FilmService
  ) { }

  ngOnInit() {
    
  }

  getOnAir() { // On déclare notre fonction
   return this.filmOnAir;  // filmOnAir de mon objet film
  }
  onWatchFilm() {
    console.log('Lecture du film démarré !');
  }
  changeColor (){
    if(this.filmOnAir == 'En Blue Ray') {
    return 'blue';  
    }else if(this.filmOnAir == 'En Salle') {
      return 'red';

    }else{
      console.log('Error: Unexpected onAir value');
    }
  }

  onSwitch() {
    if(this.filmOnAir == 'En Salle') {
      this.Film.switchOnBR(this.index);
    }else if (this.filmOnAir == 'En Blue Ray') {
      this.Film.switchOnAir(this.index);

    }else {
      console.log('Error: Unknown onAir Type');
    }
  }

  removeFilm(id: any){
    this.Film.deleteFilm(id);
  }


}
