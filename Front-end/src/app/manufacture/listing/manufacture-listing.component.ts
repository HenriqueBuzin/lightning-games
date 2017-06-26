// Angular
import { MdDialog, MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

// Directives
import { DialogComponent } from './../../_directives/dialog/dialog.component';

// Service
import { ManufactureService } from './../../_services/manufacture.service';
import { FooterService } from './../../_services/footer.service';

// Manufacture
import { Manufacture } from './../../_models/manufacture';

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-listing',
    templateUrl: './manufacture-listing.component.html',
    styleUrls: [ './manufacture-listing.component.css' ]
})
export class ManufacturesListingComponent implements OnInit {

    manufactures: Manufacture[] = [];

    constructor(public dialog: MdDialog, private manufacturesService: ManufactureService, footerService: FooterService) {

        footerService.fixFooter(false);

    }

    ngOnInit() {

        this.loadTable();

    }

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