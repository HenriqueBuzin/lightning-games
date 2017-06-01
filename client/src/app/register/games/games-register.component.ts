import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    moduleId: module.id,
    selector: 'app-games-register',
    templateUrl: './games-register.component.html',
    styleUrls: ['./games-register.component.css', '../styles.css' ]
})
export class GamesRegisterComponent {

    platforms: Object[] = [];

    constructor(http: Http){

        http.get('http://localhost:80/lightning/server/index.php/platforms')
            .map(res => res.json()).subscribe(platforms => {

            this.platforms = platforms;

            console.log(this.platforms);

        }), erro => console.log(erro);

    }

}