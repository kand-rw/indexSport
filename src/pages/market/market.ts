import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-market',
  templateUrl: 'market.html'
})
export class Market {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Market Page');
  }

}
