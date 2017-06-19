import { NgModule } from '@angular/core';

import { ManufactureService } from '../_services/manufacture.service';

import { ManufactureEditComponent } from './edit/manufacture-edit.component';

import { ManufacturesListingComponent } from './listing/manufactures-listing.component';

import { ManufacturesRegisterComponent } from './register/manufactures-register.component';

import { routing } from './manufacture.routes';

import { FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ManufacturesRegisterComponent,
        ManufacturesListingComponent,
        ManufactureEditComponent
    ],
    imports: [
        routing,
        FormsModule
    ],
    providers: [
        ManufactureService
    ]
})

export class ManufactureModule { }