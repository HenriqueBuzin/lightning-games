import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

import { DialogComponent } from '../../_directives/dialog/dialog.component';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';

@Component({
    moduleId: module.id,
    selector: 'app-users-listing',
    templateUrl: './user-listing.component.html',
    styleUrls: [ './user-listing.component.css' ]
})
export class UsersListingComponent{

    users: User[] = [];

    constructor(public dialog: MdDialog, private userService: UserService){ this.loadTable(); }

    loadTable(){

        this.userService.getUsers().subscribe(users => { this.users = users; }), erro => console.log(erro);

    }

    dialogRef: MdDialogRef<any>;

    open(message, id) {

        this.dialogRef = this.dialog.open(DialogComponent, {

            disableClose: false

        });

        this.dialogRef.componentInstance.message = message;

        this.dialogRef.afterClosed().subscribe(result => {

            if(result) {

                this.userService.deleteUser(id).subscribe(user => {

                    console.log(user);

                    this.loadTable();

                });

            }

            this.dialogRef = null;

        });

    }

}