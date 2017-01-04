import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
 games: string[];

  constructor(public navCtrl: NavController) {
    this.initializeGames();
  }

  searchGame(ev:any) {
    // Reset items back to all of the items
    this.initializeGames();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.games = this.games.filter((game) => {
        return (game.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  initializeGames() {
   this.games = [
     'Game 1',
     'Game 2',
     'Game 3',
     'Game 4',
     'Game 5',

   ];
 }


}
