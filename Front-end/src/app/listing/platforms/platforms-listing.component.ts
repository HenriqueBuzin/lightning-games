import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { DialogComponent } from '../../confirm-dialog/dialog.component';

@Component({
    moduleId: module.id,
    selector: 'app-platform-listing',
    templateUrl: './platforms-listing.component.html',
    styleUrls: [ './platforms-listing.component.css', '../styles.css' ]
})
export class PlatformsListingComponent{

    platforms: Object[] = [];

    constructor(private http: Http, public dialog: MdDialog){

        this.http.get('http://localhost:8080/lightning/api/platform')
            .map(res => res.json()).subscribe(platforms => {

            this.platforms = platforms;

            console.log(this.platforms);

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

                this.http.delete('http://localhost:8080/lightning/api/platform/' + id)

                    .map(res => res).subscribe(games => console.log(games));

            }

            this.dialogRef = null;

        });

    }

}