import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


//Configs
import {API_URL} from '../../config';
import {SERVER_URL} from '../../config';

@Component({
    templateUrl: 'build/pages/item/item.html'
})
export class ItemPage {

    public item_id:any;
    public item_name:any;
    public items:any;
    public path = SERVER_URL;


    constructor(private navCtrl:NavController, params:NavParams, private http:Http, private loadingController:LoadingController) {
        this.item_id = params.get("item_id");
        this.item_name = params.get("item_name");

        this.presentLoading();
        //Get data
        this.http.get(API_URL + 'item/' + this.item_id).map(res => res.json()).subscribe(data => {
            this.items = data.data;
        });
    }

    presentLoading() {
        let loader = this.loadingController.create({
            content: "Please wait...",
            duration: 1000
        });
        loader.present();
    }
}
