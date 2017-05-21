import { Component } from '@angular/core';
import { Http } from '@angular/http';

import {Popup} from 'ng2-opd-popup';

@Component({
    moduleId: module.id,
    selector: 'app-games-listing',
    templateUrl: './games-listing.component.html',
    styleUrls: ['./games-listing.component.css']
})
export class GamesListingComponent{ 

    games: Object[] = [];

    constructor(http: Http, private popup:Popup){

        http.get('http://localhost:80/lightning/server/index.php/games')
        .map(res => res.json()).subscribe(games => {

            this.games = games;

            console.log(this.games);

        }), erro => console.log(erro);

    }

    ClickButton(){

        this.popup.options = {

            header: "Your custom header",

            color: "#5cb85c",

            widthProsentage: 40,

            animationDuration: 1,

            showButtons: true,

            confirmBtnContent: "OK",

            cancleBtnContent: "Cancel",

            confirmBtnClass: "btn btn-default",

            cancleBtnClass: "btn btn-default",

            animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'

        };

        this.popup.show(this.popup.options);

    }

    YourConfirmEvent(){

        alert('You cliked confirm');

    }

    YourCancelEvent(){

        alert('You cliked cancel');

    }

}