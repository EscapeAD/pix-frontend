import { Component, AfterViewInit } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';

import * as PIXI from 'pixi.js';


@Component({
  selector: 'play-page',
  templateUrl: 'play.html',
})
export class PlayPage implements AfterViewInit {
clicks: number = 0;
title: String = "Game Number";


  constructor(public toastCtrl: ToastController, public navCtrl: NavController ){
    this.presentToast();
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
    let stage = new PIXI.Container();
    renderer.autoResize = true;
    renderer.resize(window.innerWidth - 60, 100);
    view.appendChild(renderer.view);
    renderer.render(stage);

    PIXI.loader
    .add("assets/basics/bunny.png")
    .load(setup);


  //This `setup` function will run when the image has loaded
  function setup() {
    var bunny = new PIXI.Sprite(
      PIXI.loader.resources["assets/basics/bunny.png"].texture
    );
    // if(document.getElementById('numberCheck').innerHTML){
    requestAnimationFrame(setup);
    bunny.x += 1;
  // } else {
    bunny.x = 0;
    console.log('stop');
  // }
    bunny.y = 10;
    //Add the cat to the stage
    stage.addChild(bunny);

    //Render the stage
    renderer.render(stage);

  }

  }


}
