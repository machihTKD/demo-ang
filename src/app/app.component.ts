import { Component } from '@angular/core';
import {AppareilComponent}  from './appareil/appareil.component';
/*import {open-class-roomsComponent}  from './open-class-rooms/open-class-rooms.component';*/


@Component ({
  selector: 'app-root', /*'open-class-rooms'*/
  templateUrl: './app.component.html',  /* './open-class-rooms.comonent.html' */
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
/*  title = 'OpenClassRooms Exercice';*/
  isAuth = false;
  appareilStatus : String;
  appreilName : String;




 /*appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];*/




getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
}




lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

 

onAllumer() { var reponse = prompt ("êtes-vous sûr de vouloir allumer tout!?");

    alert (reponse.toUpperCase())

    if (reponse === "oui"  || reponse === "oui ") { 
    alert ("On allume tout !");

      }   else if (reponse === "non" || reponse === "non " )  { 

      alert ("On n\'allume rien !"); 

      }  else {

      alert ("Je n\'ai pas compris ta requête");

      }
}



constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
}

