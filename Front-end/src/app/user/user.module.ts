// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Component
import { UsersRegisterComponent } from './register/user-register.component';
import { UsersListingComponent } from './listing/user-listing.component';
import { UserEditComponent } from './edit/user-edit.component';
import { UserComponent } from './user.component';

// Service
import { UserService } from '../_service/user.service';

// Directives
import { FormControlModule } from '../_directive/form-control/form-control.module';

// Pipe
import { SearchUserPipe } from './search-user.pipe';

// Routes
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
