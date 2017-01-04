import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Game } from './game-interface';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
 games: Game[] = [];

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
        return (game['title'].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  initializeGames() {
   this.games = [
     {title: 'Game 1', owner: 1, challenger: 1, winner: 1},
     {title: 'Game 2', owner: 1, challenger: 1, winner: 1},
     {title: 'Game 3', owner: 1, challenger: 1, winner: 1},
     {title: 'Game 4', owner: 1, challenger: 1, winner: 1},
   ];
 }


}
