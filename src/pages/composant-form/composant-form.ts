import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { ComposantProvider } from "../../providers/composant/composant";

@IonicPage()
@Component({
  selector: 'page-composant-form',
  templateUrl: 'composant-form.html',
})
export class ComposantFormPage {

  newComposant: any = {
    idComposant: 0,
    nomComposant: '',
    gammeComposant: '',
    fournisseurComposant: '',
    prixComposant: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public composantService: ComposantProvider) {
    this.newComposant.idComposant = navParams.get('idComposant');
  }

  ionViewDidLoad() {
  }

  addComposant() {
    this.composantService.addNewComposant(this.newComposant);
    this.navCtrl.pop();
  }

}
