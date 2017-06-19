import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

import { DialogComponent } from '../../_directives/dialog/dialog.component';
import { ManufactureService } from '../../_services/manufacture.service';
import { Manufacture } from '../../_models/manufacture';

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-listing',
    templateUrl: './manufacture-listing.component.html',
    styleUrls: [ './manufacture-listing.component.css' ]
})
export class ManufacturesListingComponent{

    manufactures: Manufacture[] = [];

    constructor(public dialog: MdDialog, private manufacturesService: ManufactureService){

        this.manufacturesService.getManufactures().subscribe(manufactures => { this.manufactures = manufactures; }), erro => console.log(erro);

    }

    dialogRef: MdDialogRef<any>;

    open(message, id) {

        this.dialogRef = this.dialog.open(DialogComponent, {

            disableClose: false

        });

        this.dialogRef.componentInstance.message = message;

        this.dialogRef.afterClosed().subscribe(result => {

            if(result) {

                this.manufacturesService.deleteManufacture(id).subscribe(games => console.log(games));

            }

            this.dialogRef = null;

        });

    }

}