import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, private iab: InAppBrowser, public statusBar: StatusBar) {
		this.statusBar = statusBar;
	}

	openEnglish() {
		console.log('openEnglish');
		//const browser = this.iab.create('https://indd.adobe.com/view/4b8cdced-0539-4f01-8be1-4025980b9c4b','_blank','location=no');
		this.iab.create('http://citizensinc.com/bermuda_en/index.html','_blank','location=no');
	}

	openSpanish() {
		console.log('openSpanish');
		this.iab.create('http://citizensinc.com/bermuda_es/index.html','_blank','location=no');
	}

	inAppSlide() {
		console.log('inAppSlide');
		this.iab.create('assets/slides-tester.html','_blank','location=no');
		this.statusBar.overlaysWebView(true);
		this.statusBar.overlaysWebView(false);
		this.statusBar.hide();
	}

	openPortuguese() {
		this.iab.create('http://citizensinc.com/bermuda_po/index.html','_blank','location=no');
	}
}
