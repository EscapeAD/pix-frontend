import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'play-page',
  templateUrl: 'play.html'
})
export class PlayPage {

  constructor(public toastCtrl: ToastController, public navCtrl: NavController){
    this.presentToast();
  }


  quitGame(){
    this.navCtrl.pop();
  }

  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'You have joined game',
    duration: 3000,
    position: 'top'
  });
  toast.present();
  }
}
