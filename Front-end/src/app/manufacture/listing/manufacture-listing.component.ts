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

    constructor(public dialog: MdDialog, private manufacturesService: ManufactureService){ this.loadTable(); }

    loadTable(){

        this.manufacturesService.getManufactures().subscribe(
            (manufactures: Manufacture[]) => {
                this.manufactures = manufactures;
        }), erro => console.log(erro);

    }

    dialogRef: MdDialogRef<any>;

    open(message: string, id: number) {

        this.dialogRef = this.dialog.open(DialogComponent, {

            disableClose: false

        });

        this.dialogRef.componentInstance.message = message;

        this.dialogRef.afterClosed().subscribe(result => {

            if(result) {

                this.manufacturesService.deleteManufacture(id).subscribe(

                    (manufacture: Manufacture[]) => {

                        console.log(manufacture);

                        this.loadTable();

                });

            }

            this.dialogRef = null;

        });

    }

}