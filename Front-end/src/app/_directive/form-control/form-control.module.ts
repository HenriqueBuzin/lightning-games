// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Directive
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
