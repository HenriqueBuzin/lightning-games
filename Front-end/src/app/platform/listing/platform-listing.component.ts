// Angular
import { MdDialog, MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

// Component
import { DialogComponent } from './../../_directives/dialog/dialog.component';

// Service
import { PlatformsService } from './../../_services/platform.service';
import { FooterService } from './../../_services/footer.service';

// Model
import { Platform } from './../../_models/platform';

@Component({
    moduleId: module.id,
    selector: 'app-platform-listing',
    templateUrl: './platform-listing.component.html',
    styleUrls: [ './platform-listing.component.css' ]
})
export class PlatformsListingComponent implements OnInit {

    platforms: Object[] = [];

    constructor(public dialog: MdDialog, private platformsService: PlatformsService, footerService: FooterService) {

        footerService.fixFooter(false);

    }

    ngOnInit() {

        this.loadTable();

    }

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