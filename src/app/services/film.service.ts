import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }
  films = [
    {
      name: 'Jurassic Park',
      onAir: 'En Blue Ray',
      affiche:'https://upload.wikimedia.org/wikipedia/fr/4/46/Jurassic_Park_Logo.png'
    },
    {
        name: 'Star Wars',
        onAir: 'En Blue Ray',
        affiche:'https://images-na.ssl-images-amazon.com/images/I/8104RMlgxWL._AC_SY550_.jpg'
    },
     
    {
          name: '30 jours Max',
          onAir: 'En Salle',
          affiche:'https://fr.web.img4.acsta.net/pictures/20/09/03/13/51/4752567.jpg'
    },
  ];

/**
 * Set All Movies on Air
 * 
 */
  setOnAir() {
    for (const film of this.films) {
      film.onAir = 'En Salle';
      
    }

  }

  setOnBR() {
    for (const iterator of this.films) {
      iterator.onAir = 'En Blue Ray';
      
    }

  }

  switchOnAir(index: number){
    this.films[index].onAir = 'En Salle';

  }

  switchOnBR(index: number){
    this.films[index].onAir = 'En Blue Ray';

  }
}
