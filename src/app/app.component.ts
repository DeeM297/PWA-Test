import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  isDesktop: boolean = false;

  rootPage = TabsPage;

  constructor(platform: Platform) {

    //Check if running on desktop
      if (platform.is('core')) {
        // This will only print when on desktop
        console.log("I'm in a desktop!");
        this.isDesktop = true;
      }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
