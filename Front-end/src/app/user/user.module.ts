import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormControlModule } from '../_directives/form-control/form-control.module';
import { UsersRegisterComponent } from './register/user-register.component';
import { UsersListingComponent } from './listing/user-listing.component';
import { UserEditComponent } from './edit/user-edit.component';
import { UserService } from '../_services/user.service';
import {SearchUserPipe} from "./search-user.pipe";
import { UserComponent } from './user.component';

import { routing } from './user.routes';

@NgModule({
    declarations: [
        UsersRegisterComponent,
        UsersListingComponent,
        UserEditComponent,
        SearchUserPipe,
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