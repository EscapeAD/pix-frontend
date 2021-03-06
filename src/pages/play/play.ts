import { Component, AfterViewInit, OnDestroy} from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';

import * as PIXI from 'pixi.js';


@Component({
  selector: 'play-page',
  templateUrl: 'play.html',
})
export class PlayPage implements AfterViewInit, OnDestroy {
clicks: number = 0;
title: String = "Game Number";
enemy: number = 0;


  constructor(public toastCtrl: ToastController, public navCtrl: NavController ){
    this.presentToast();
    console.log(this.clicks);
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
    let renderer = PIXI.autoDetectRenderer(800, 600,{ transparent : true });
    let view = document.getElementById('canvas');
    let stage = new PIXI.Container();
    let texture = PIXI.Texture.fromImage('assets/basics/baymax2.png');
    let bunny = new PIXI.Sprite(texture);
    let jack = PIXI.Texture.fromImage('assets/basics/jackie.png');
    let jackie = new PIXI.Sprite(jack);
    let p1Name = new PIXI.Text('player 1');
    let p2Name = new PIXI.Text('player 2');

    renderer.autoResize = true;
    renderer.resize(window.innerWidth - 60, 200);
    view.appendChild(renderer.view);
    p1Name.x = 1;
    p2Name.y = 15;
    p2Name.x = 1;
    p2Name.y = 185;
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;
    // bunny.position.x = 30;
    bunny.position.y = 50;
    jackie.anchor.x = 0.5;
    jackie.anchor.y = 0.5;
    // jackie.position.x = 30;
    jackie.position.y = 150;
    stage.addChild(bunny);
    stage.addChild(jackie);
    let animate = () => {
           requestAnimationFrame(animate);
           // just for fun, let's rotate mr rabbit a little
           bunny.position.x = 30 + (this.clicks);
           jackie.position.x = 30 + (this.enemy);
           // render the container
           renderer.render(stage);
    }
    animate();
  }

  ngOnDestroy(){
    for (var textureUrl in PIXI.utils.BaseTextureCache) {
        delete PIXI.utils.BaseTextureCache[textureUrl];
    }
    for (var textureUrl in PIXI.utils.TextureCache) {
        delete PIXI.utils.TextureCache[textureUrl];
    }

  }

}
