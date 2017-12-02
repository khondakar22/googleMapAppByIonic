import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import {SetLocationPage} from "../set-location/set-location";
import {Location} from "../../models/location";

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
location : Location = {
	lat:  49.8728,
	lng: 8.6512
};
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacePage');
  }
  onSubmit(form: NgForm){
  	console.log(form.value);
  }

  onOpenMap(){
  	const modal = this.modalCtrl.create(SetLocationPage, {location:this.location});
  	modal.present();
  }

}
