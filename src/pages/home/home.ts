import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	statusBar: any;

	constructor(public navCtrl: NavController, private iab: InAppBrowser, public statusBar: StatusBar) {
		this.statusBar = statusBar;
	}

	openEnglish() {
		console.log('openEnglish');
		const browser = this.iab.create('https://indd.adobe.com/view/4b8cdced-0539-4f01-8be1-4025980b9c4b','_blank','location=no');

	}

	openSpanish() {
		console.log('openSpanish');
		const browser = this.iab.create('http://threeleaf.net/cicalife.epub','_system');
	}

	inAppSlide() {
		console.log('inAppSlide');
		const browser = this.iab.create('assets/slides-tester.html','_blank','location=no');
		this.statusBar.overlaysWebView(true);
		this.statusBar.overlaysWebView(false);
		this.statusBar.hide();
	}

	openPortuguese() {
		console.log('openPortuguese');
	}
}
