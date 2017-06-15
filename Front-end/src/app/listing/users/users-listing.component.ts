import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { DialogComponent } from '../../confirm-dialog/dialog.component';

@Component({
    moduleId: module.id,
    selector: 'app-users-listing',
    templateUrl: './users-listing.component.html',
    styleUrls: [ './users-listing.component.css', '../styles.css' ]
})
export class UsersListingComponent{

    users: Object[] = [];

    constructor(private http: Http, public dialog: MdDialog){

        this.http.get('http://localhost:8080/lightning/api/user')
            .map(res => res.json()).subscribe(users => {

            this.users = users;

            console.log(this.users);

        }), erro => console.log(erro);

    }

    dialogRef: MdDialogRef<any>;

    open(message, id) {

        this.dialogRef = this.dialog.open(DialogComponent, {

            disableClose: false

        });

        this.dialogRef.componentInstance.message = message;

        this.dialogRef.afterClosed().subscribe(result => {

            if(result) {

                this.http.delete('http://localhost:8080/lightning/api/user/' + id)

                    .map(res => res).subscribe(games => console.log(games));

            }

            this.dialogRef = null;

        });

    }

}