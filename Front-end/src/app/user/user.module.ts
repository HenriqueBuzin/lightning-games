import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { routing } from './user.routes';

import { UserService } from '../_services/user.service';

import { UserEditComponent } from './edit/user-edit.component';

import { UsersListingComponent } from './listing/user-listing.component';

import { UsersRegisterComponent } from './register/user-register.component';

import { UserComponent } from './user.component';

import { FormControlModule } from '../_directives/form-control/form-control.module';

@NgModule({
    declarations: [
        UsersRegisterComponent,
        UsersListingComponent,
        UserEditComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        routing,
        FormControlModule
    ],
    providers: [
        UserService
    ]
})

export class UserModule { }