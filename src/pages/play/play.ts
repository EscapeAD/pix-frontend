import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';

import * as PIXI from 'pixi.js';


@Component({
  selector: 'play-page',
  templateUrl: 'play.html'
})
export class PlayPage implements AfterViewInit {
clicks: number = 0;
title: String = "Game Number";


  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public canvas: ElementRef){
    this.presentToast();
    this.canvas;
  }


  quitGame(){
    this.navCtrl.pop();
  }

  addOne(){
    this.clicks += 1;
  }

  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'You have joined game',
    duration: 3000,
    position: 'top'
  });
  toast.present();
  }

  ngAfterViewInit() {
    // let renderer = PIXI.autoDetectRenderer(400, 100,{backgroundColor : 0x000000});
    let renderer = new PIXI.WebGLRenderer(400, 100);
    let view = document.getElementById('canvas');
    view.appendChild(renderer.view);
  }


}
