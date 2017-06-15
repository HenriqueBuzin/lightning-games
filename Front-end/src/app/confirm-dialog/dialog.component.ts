import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: [ './dialog.component.css' ]
})
export class DialogComponent {

    constructor(public dialogRef: MdDialogRef<any>) { }

    public message: string;

}