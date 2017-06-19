import { NgModule } from '@angular/core';

import { PlatformEditService } from '../_services/platform/edit/platform-edit.service';
import { PlatformsListingService } from '../_services/platform/listing/platforms-listing.service';

import { PlatformEditComponent } from './edit/platform-edit.component';
import { PlatformsListingComponent } from './listing/platforms-listing.component';
import { PlatformsRegisterComponent } from './register/platforms-register.component';

import { routing } from './platform.route';

import { FormControlModule } from '../_directives/form-control/form-control.module';

@NgModule({
    declarations: [
        PlatformsRegisterComponent,
        PlatformsListingComponent,
        PlatformEditComponent
    ],
    imports: [
        routing,
        FormControlModule
    ],
    providers: [
        PlatformsListingService,
        PlatformEditService
    ]
})

export class PlatformModule { }