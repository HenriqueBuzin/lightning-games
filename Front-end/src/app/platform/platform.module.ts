// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Component
import { PlatformsRegisterComponent } from './register/platform-register.component';
import { PlatformsListingComponent } from './listing/platform-listing.component';
import { PlatformEditComponent } from './edit/platform-edit.component';
import { PlatformComponent } from './platform.component';

// External Component
import { FormControlModule } from './../_directives/form-control/form-control.module';

// Service
import { PlatformsService } from './../_services/platform.service';

// Pipe
import { SearchPlatformPipe } from './search-platform.pipe';

// Routes
import { routing } from './platform.route';

@NgModule({
    declarations: [
        PlatformsRegisterComponent,
        PlatformsListingComponent,
        PlatformEditComponent,
        SearchPlatformPipe,
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
