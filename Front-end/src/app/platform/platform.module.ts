import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { routing } from './platform.route';

import { PlatformsService } from '../_services/platform.service';

import { PlatformEditComponent } from './edit/platform-edit.component';

import { PlatformsListingComponent } from './listing/platform-listing.component';

import { PlatformsRegisterComponent } from './register/platform-register.component';

import { PlatformComponent } from './platform.component';

import { FormControlModule } from '../_directives/form-control/form-control.module';

@NgModule({
    declarations: [
        PlatformsRegisterComponent,
        PlatformsListingComponent,
        PlatformEditComponent,
        PlatformComponent
    ],
    imports: [
        FormControlModule,
        CommonModule,
        routing
    ],
    providers: [
        PlatformsService
    ]
})

export class PlatformModule { }