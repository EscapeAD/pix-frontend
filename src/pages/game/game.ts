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
     {title: 'Game 1', owner: "player 1", challenger: "player 2", winner: "player 1"},
     {title: 'Game 2', owner: "player 1", challenger: "player 2", winner: "player 1"},
     {title: 'Game 3', owner: "player 1", challenger: "player 2", winner: "player 1"},
     {title: 'Game 4', owner: "player 1", challenger: "player 2", winner: "player 1"},
     {title: 'Game 5', owner: "player 1", challenger: "player 2", winner: "player 1"},
     {title: 'Game 6', owner: "player 1", challenger: "player 2", winner: "player 1"}

   ];
 }


}
