// Angular
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: [ './dialog.component.css' ]
})

export class DialogComponent {

    public message: string;

    constructor(public dialogRef: MdDialogRef<any>) { }

}
