import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-games-listing',
    templateUrl: './games-listing.component.html',
    styleUrls: [ './games-listing.component.css', '../styles.css' ]
})
export class GamesListingComponent{

    games: Object[] = [];

    /*

    delete(id:number){


        console.log(id);

    }

    edit(form){

        this.http.post('', JSON.stringify(form.value))
            .map(res => res.json)
            .subscribe(games => console.log(games));

    }


*/

    constructor(http: Http){

        http.get('http://localhost:80/lightning/server/index.php/game')
        .map(res => res.json()).subscribe(games => {

            this.games = games;

            console.log(this.games);

        }), erro => console.log(erro);

    }

}