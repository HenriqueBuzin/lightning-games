import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ManufactureService } from '../_services/manufacture.service';

import { ManufactureEditComponent } from './edit/manufacture-edit.component';

import { ManufacturesListingComponent } from './listing/manufacture-listing.component';

import { ManufacturesRegisterComponent } from './register/manufacture-register.component';

import { routing } from './manufacture.routes';

import { FormsModule} from '@angular/forms';

import { ManufactureComponent } from './manufacture.component';


@NgModule({
    declarations: [
        ManufacturesRegisterComponent,
        ManufacturesListingComponent,
        ManufactureEditComponent,
        ManufactureComponent
    ],
    imports: [
        routing,
        FormsModule,
        CommonModule
    ],
    providers: [
        ManufactureService
    ]
})

export class ManufactureModule { }