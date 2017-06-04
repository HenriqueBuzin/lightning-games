import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-platform-listing',
    templateUrl: './platforms-listing.component.html',
    styleUrls: [ './platforms-listing.component.css', '../styles.css' ]
})
export class PlatformsListingComponent{

    platforms: Object[] = [];

    constructor(private http: Http){

        http.get('http://localhost:8080/lightning/api/platform')
            .map(res => res.json()).subscribe(platforms => {

            this.platforms = platforms;

            console.log(this.platforms);

        }), erro => console.log(erro);

    }

}