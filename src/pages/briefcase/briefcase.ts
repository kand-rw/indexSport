import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Briefcase page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-briefcase',
  templateUrl: 'briefcase.html'
})
export class Briefcase {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Briefcase Page');
  }

}
