import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

//Pages
import {HomePage} from './pages/home/home';


@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class Cookbook {

    private rootPage:any;

    constructor(private platform:Platform) {
        this.rootPage = HomePage;

        platform.ready().then(() => {
            StatusBar.styleDefault();
        });
    }
}

ionicBootstrap(Cookbook);
