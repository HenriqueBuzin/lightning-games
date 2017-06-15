import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent{

    games: Object[] = [];

    constructor(private http: Http){

        this.http.get('http://localhost:8080/lightning/api/game')
            .map(res => res.json()).subscribe(games => {

            this.games = games;

            console.log(this.games);

        }), erro => console.log(erro);

    }

}