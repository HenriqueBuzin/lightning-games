// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { ManufactureService } from '../_service/manufacture.service';

// Components
import { ManufacturesRegisterComponent } from './register/manufacture-register.component';
import { ManufacturesListingComponent } from './listing/manufacture-listing.component';
import { ManufactureEditComponent } from './edit/manufacture-edit.component';
import { ManufactureComponent } from './manufacture.component';

// External Component
import { FormControlModule } from '../_directive/form-control/form-control.module';

// Pipe
import {SearchManufacturePipe} from './search-manufacture.pipe';

// Routes
import { routing } from './manufacture.routes';

@NgModule({
    declarations: [
        ManufacturesRegisterComponent,
        ManufacturesListingComponent,
        ManufactureEditComponent,
        SearchManufacturePipe,
        ManufactureComponent
    ],
    imports: [
        FormControlModule,
        CommonModule,
        routing
    ],
    providers: [
        ManufactureService
    ]
})

export class ManufactureModule { }
