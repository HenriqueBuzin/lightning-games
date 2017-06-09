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

    delete(id){

        this.http.delete('http://localhost:8080/lightning/api/platform', JSON.stringify(id))
            .map(res => res).subscribe(games => console.log(games));

    }

    edit(id){

        /*

        form

        this.http.post('http://localhost:8080/lightning/api/platform', JSON.stringify(form.value))
            .map(res => res).subscribe(games => console.log(games));

         */

        alert(id);



    }

    constructor(private http: Http){

        http.get('http://localhost:8080/lightning/api/platform')
            .map(res => res.json()).subscribe(platforms => {

            this.platforms = platforms;

            console.log(this.platforms);

        }), erro => console.log(erro);

    }

}