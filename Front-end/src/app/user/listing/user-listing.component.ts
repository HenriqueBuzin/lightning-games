import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

import { DialogComponent } from '../../_directives/dialog/dialog.component';
import { UsersListingService } from '../../_services/user/listing/users-listing.service';
import { User } from '../../_models/user';

@Component({
    moduleId: module.id,
    selector: 'app-users-listing',
    templateUrl: './user-listing.component.html',
    styleUrls: [ './user-listing.component.css' ]
})
export class UsersListingComponent{

    users: User[] = [];

    constructor(public dialog: MdDialog, private userListingService: UsersListingService){

        this.userListingService.getUsers().subscribe(users => { this.users = users; }), erro => console.log(erro);

    }

    dialogRef: MdDialogRef<any>;

    open(message, id) {

        this.dialogRef = this.dialog.open(DialogComponent, {

            disableClose: false

        });

        this.dialogRef.componentInstance.message = message;

        this.dialogRef.afterClosed().subscribe(result => {

            if(result) {

                this.userListingService.deleteUser(id).subscribe(games => console.log(games));

            }

            this.dialogRef = null;

        });

    }

}