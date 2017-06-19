import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { FormControlComponent } from './form-control.component';


@NgModule({
    declarations: [
        FormControlComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [ FormControlComponent, FormsModule ]
})

export class FormControlModule { }