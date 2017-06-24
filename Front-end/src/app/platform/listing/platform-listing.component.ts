import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

import { DialogComponent } from '../../_directives/dialog/dialog.component';

import { PlatformsService } from '../../_services/platform.service';
import {Platform} from "../../_models/platform";

@Component({
    moduleId: module.id,
    selector: 'app-platform-listing',
    templateUrl: './platform-listing.component.html',
    styleUrls: [ './platform-listing.component.css' ]
})
export class PlatformsListingComponent{

    platforms: Object[] = [];

    constructor(public dialog: MdDialog, private platformsService : PlatformsService){ this.loadTable(); }

    loadTable(){

        this.platformsService.getPlatforms().subscribe(
            (platforms: Platform[]) => {
                this.platforms = platforms;
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

                this.platformsService.deletePlatform(id).subscribe(
                    (platform: Platform[]) => {

                     console.log(platform);

                    this.loadTable();

                });

            }

            this.dialogRef = null;

        });

    }

}