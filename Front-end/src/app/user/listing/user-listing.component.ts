// Angualar
import { MdDialog, MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

// Directive
import { DialogComponent } from '../../_directive/dialog/dialog.component';

// Service
import { FooterService } from '../../_service/footer.service';
import { UserService } from '../../_service/user.service';

// Model
import { User } from '../../_model/user';

@Component({
    moduleId: module.id,
    selector: 'app-users-listing',
    templateUrl: './user-listing.component.html',
    styleUrls: [ './user-listing.component.css' ]
})
export class UsersListingComponent implements OnInit {

    users: User[] = [];

    private dialogRef: MdDialogRef<any>;

    constructor(public dialog: MdDialog, private userService: UserService, footerService: FooterService) {

        footerService.fixFooter(false);

    }

    ngOnInit() {

        this.loadTable();

    }

    loadTable() {

        this.userService.getUsers().subscribe(

            (users: User[]) => {

                this.users = users;

                console.log(users);

        }, (error: Response) => console.log(error));

    }

    open(message: string, id: number) {

        this.dialogRef = this.dialog.open(DialogComponent, {

            disableClose: false

        });

        this.dialogRef.componentInstance.message = message;

        this.dialogRef.afterClosed().subscribe(result => {

            if (result) {

                this.userService.deleteUser(id).subscribe(

                    (user: User[]) => {

                        console.log(user);

                        this.loadTable();

                });

            }

            this.dialogRef = null;

        });

    }

}
