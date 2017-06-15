import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { DialogComponent } from '../../confirm-dialog/dialog.component';

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-listing',
    templateUrl: './manufactures-listing.component.html',
    styleUrls: [ './manufactures-listing.component.css', '../styles.css' ]
})
export class ManufacturesListingComponent{

    manufactures: Object[] = [];

    constructor(private http: Http, public dialog: MdDialog){

        this.http.get('http://localhost:8080/lightning/api/manufacture')
            .map(res => res.json()).subscribe(manufactures => {

            this.manufactures = manufactures;

            console.log(this.manufactures);

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

                this.http.delete('http://localhost:8080/lightning/api/manufacture/' + id)

                    .map(res => res).subscribe(games => console.log(games));

            }

            this.dialogRef = null;

        });

    }

}