import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-listing',
    templateUrl: './manufactures-listing.component.html',
    styleUrls: [ './manufactures-listing.component.css', '../styles.css' ]
})
export class ManufacturesListingComponent{

    manufactures: Object[] = [];

    constructor(private http: Http){

        http.get('http://localhost:8080/lightning/api/manufacture')
            .map(res => res.json()).subscribe(manufactures => {

            this.manufactures = manufactures;

            console.log(this.manufactures);

        }), erro => console.log(erro);

    }

}