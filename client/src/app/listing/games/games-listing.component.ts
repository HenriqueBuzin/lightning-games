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

        this.http.delete('http://localhost:80/lightning/server/index.php/test', JSON.stringify(id))
        .map(res => res).subscribe(games => console.log(games));

    }

    edit(form){

        this.http.post('http://localhost:80/lightning/server/index.php/test', JSON.stringify(form.value))
        .map(res => res).subscribe(games => console.log(games));

    }

    */

    constructor(private http: Http){

        http.get('http://localhost:8080/lightning/api/game')
        .map(res => res.json()).subscribe(games => {

            this.games = games;

            console.log(this.games);

        }), erro => console.log(erro);

    }

}