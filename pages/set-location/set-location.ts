import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Location} from "../../models/location";

/**
 * Generated class for the SetLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {

 	 location : Location;
 	 marker: Location;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtr: ViewController) {

  	this.location = this.navParams.get('location');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetLocationPage');
  }

  onSetMarker(event:any){
  	console.log(event);
  	this.marker = new Location(event.coords.lat,event.coords.lng);
  }

  onConfirm(){
  	this.viewCtr.dismiss({location:this.marker});
  }

  onAbort(){
  	this.viewCtr.dismiss();
  }



}
