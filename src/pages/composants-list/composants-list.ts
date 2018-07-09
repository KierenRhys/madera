import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { ComposantFormPage } from "../composant-form/composant-form";

import { ComposantProvider } from "../../providers/composant/composant";

@Component({
  selector: 'page-composants-list',
  templateUrl: 'composants-list.html',
})
export class ComposantsListPage {
  allComposant: any = [];
  composantFormPage = ComposantFormPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public composantServ: ComposantProvider, public events: Events) {
    this.events.subscribe('composant:added', (composant) => {
      this.allComposant.push(composant);
    });
  }

  ionViewDidLoad() {
    this.getAll();
  }

  getAll() {
    this.composantServ.getAll().then((res) => {
      this.allComposant = res;
    }, (err) => {
      console.log(err);
    });
  }
}
