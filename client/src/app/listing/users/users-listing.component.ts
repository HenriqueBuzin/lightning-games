import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-users-listing',
    templateUrl: './users-listing.component.html',
    styleUrls: [ './users-listing.component.css', '../styles.css' ]
})
export class UsersListingComponent{

    users: Object[] = [];

    constructor(private http: Http){

        http.get('http://localhost:8080/lightning/api/user')
            .map(res => res.json()).subscribe(users => {

            this.users = users;

            console.log(this.users);

        }), erro => console.log(erro);

    }


}