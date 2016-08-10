import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

//Pages
import {CategoryPage} from '../category/category';
import {SearchPage} from '../search/search';

//Configs
import {API_URL} from '../../config';
import {SERVER_URL} from '../../config';


@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    categories:any;
    path = SERVER_URL;

    constructor(private navCtrl:NavController, private http:Http) {

        this.http.get(API_URL + 'homepage').map(res => res.json()).subscribe(data => {
            this.categories = data.data;
        });

    }

    navigate(category_id, category_name) {
        this.navCtrl.push(CategoryPage, {
            category_id: category_id,
            category_name: category_name

        });
    }

    openSearchPage() {
        this.navCtrl.push(SearchPage);
    }

}
