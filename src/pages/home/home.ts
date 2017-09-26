import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, private iab: InAppBrowser) {

	}

	openEnglish() {
		console.log('openEnglish');
		const browser = this.iab.create('https://ionicframework.com/','_self','location=no');

	}

	openSpanish() {
		console.log('openSpanish');
	}

	openPortuguese() {
		console.log('openPortuguese');
	}
}
