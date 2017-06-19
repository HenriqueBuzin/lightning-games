import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ManufactureService } from '../_services/manufacture.service';

import { ManufactureEditComponent } from './edit/manufacture-edit.component';

import { ManufacturesListingComponent } from './listing/manufacture-listing.component';

import { ManufacturesRegisterComponent } from './register/manufacture-register.component';

import { routing } from './manufacture.routes';

import { ManufactureComponent } from './manufacture.component';

import { FormControlModule } from '../_directives/form-control/form-control.module';

@NgModule({
    declarations: [
        ManufacturesRegisterComponent,
        ManufacturesListingComponent,
        ManufactureEditComponent,
        ManufactureComponent,
    ],
    imports: [
        routing,
        FormControlModule,
        CommonModule
    ],
    providers: [
        ManufactureService
    ]
})

export class ManufactureModule { }