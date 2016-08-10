import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

//Pages
import {ItemPage} from '../item/item';

//Configs
import {API_URL} from '../../config';
import {SERVER_URL} from '../../config';


@Component({
    templateUrl: 'build/pages/category/category.html'
})
export class CategoryPage {

    public category_id:any;
    public category_name:any;
    public items:any;
    public path = SERVER_URL;

    constructor(private navCtrl:NavController, params:NavParams, private http:Http, private loadingController:LoadingController) {
        this.category_id = params.get("category_id");
        this.category_name = params.get("category_name");

        this.presentLoading();

        this.http.get(API_URL + 'category/' + this.category_id).map(res => res.json()).subscribe(data => {
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

    navigate(item_id, item_name) {
        console.log(item_id);
        this.navCtrl.push(ItemPage, {
            item_id: item_id,
            item_name: item_name

        });
    }


}
