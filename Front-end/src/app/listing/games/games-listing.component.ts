import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { DialogComponent } from '../../confirm-dialog/dialog.component';

@Component({
    moduleId: module.id,
    selector: 'app-games-listing',
    templateUrl: './games-listing.component.html',
    styleUrls: [ './games-listing.component.css', '../styles.css' ]
})
export class GamesListingComponent{

    games: Object[] = [];

    constructor(private http: Http, public dialog: MdDialog){

        this.http.get('http://localhost:8080/lightning/api/game')

            .map(res => res.json()).subscribe(games => {

            this.games = games;

            console.log(this.games);

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

                this.http.delete('http://localhost:8080/lightning/api/game/' + id)

                    .map(res => res).subscribe(games => console.log(games));

            }

            this.dialogRef = null;

        });

    }

}