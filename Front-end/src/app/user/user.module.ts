import { NgModule } from '@angular/core';

import { UsersListingService } from '../_services/user/listing/users-listing.service';
import { UserEditService } from '../_services/user/edit/user-edit.service';

import { UserEditComponent } from './edit/user-edit.component';
import { UsersListingComponent } from './listing/user-listing.component';
import { UsersRegisterComponent } from './register/user-register.component';

import { routing } from './user.routes';

@NgModule({
    declarations: [
        UserEditComponent,
        UsersListingComponent,
        UsersRegisterComponent
    ],
    imports: [
        routing
    ],
    providers: [
        UsersListingService,
        UserEditService
    ]
})

export class UserModule { }