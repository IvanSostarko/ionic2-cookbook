import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


//Pages
import {ItemPage} from '../item/item'

//Configs
import {API_URL} from '../../config';
import {SERVER_URL} from '../../config';

@Component({
    templateUrl: 'build/pages/search/search.html'
})
export class SearchPage {

    results:any;
    path = SERVER_URL;
    public searchQuery:string = '';


    constructor(private navCtrl:NavController, private http:Http) {
    }

    onInput(e) {
        this.http.get(API_URL + 'search/' + this.searchQuery).map(res => res.json()).subscribe(data => {
            this.results = data.data
        });
    }

    navigate(item_id, item_name) {
        this.navCtrl.push(ItemPage, {
            item_id: item_id,
            item_name: item_name

        });
    }

}
