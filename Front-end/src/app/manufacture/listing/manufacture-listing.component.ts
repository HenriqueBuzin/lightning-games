// Angular
import { MdDialog, MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

// Directives
import { DialogComponent } from '../../_directive/dialog/dialog.component';

// Service
import { ManufactureService } from '../../_service/manufacture.service';
import { FooterService } from '../../_service/footer.service';

// Manufacture
import { Manufacture } from '../../_model/manufacture';

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-listing',
    templateUrl: './manufacture-listing.component.html',
    styleUrls: [ './manufacture-listing.component.css' ]
})
export class ManufacturesListingComponent implements OnInit {

    manufactures: Manufacture[] = [];

    private dialogRef: MdDialogRef<any>;

    constructor(public dialog: MdDialog, private manufacturesService: ManufactureService, footerService: FooterService) {

        footerService.fixFooter(false);

    }

    ngOnInit() {

        this.loadTable();

    }

    loadTable() {

        this.manufacturesService.getManufactures().subscribe(
            (manufactures: Manufacture[]) => {
                this.manufactures = manufactures;
        }, erro => console.log(erro));

    }

    open(message: string, id: number) {

        this.dialogRef = this.dialog.open(DialogComponent, {

            disableClose: false

        });

        this.dialogRef.componentInstance.message = message;

        this.dialogRef.afterClosed().subscribe(result => {

            if (result) {

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
