import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

import { DialogComponent } from '../../_directives/dialog/dialog.component';

import { PlatformsListingService } from '../../_services/platform/listing/platforms-listing.service';

@Component({
    moduleId: module.id,
    selector: 'app-platform-listing',
    templateUrl: './platform-listing.component.html',
    styleUrls: [ './platform-listing.component.css' ]
})
export class PlatformsListingComponent{

    platforms: Object[] = [];

    constructor(public dialog: MdDialog, private platformsListingService : PlatformsListingService){

        this.platformsListingService.getPlatforms().subscribe(platforms => { this.platforms = platforms; }), erro => console.log(erro);

    }

    dialogRef: MdDialogRef<any>;

    open(message, id) {

        this.dialogRef = this.dialog.open(DialogComponent, {

            disableClose: false

        });

        this.dialogRef.componentInstance.message = message;

        this.dialogRef.afterClosed().subscribe(result => {

            if(result) {

                this.platformsListingService.deletePlatform(id).subscribe(games => console.log(games));

            }

            this.dialogRef = null;

        });

    }

}