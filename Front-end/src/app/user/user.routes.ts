import { RouterModule, Routes } from '@angular/router';

import { UsersRegisterComponent  } from './register/user-register.component';
import { UsersListingComponent } from './listing/user-listing.component';
import { UserEditComponent } from './edit/user-edit.component';

import { UserModule } from './user.module';
import {AuthChildGuard} from "../_guards/auth-child-guard";

const userRoutes: Routes = [

    {

        path: '', component: UserModule, canActivateChild: [ AuthChildGuard ],

        children: [

            { path: '', component: UsersListingComponent },

            { path: 'cadastrar', component: UsersRegisterComponent },

            { path: 'editar/:id', component: UserEditComponent }

        ]

    }




];

export const routing = RouterModule.forChild(userRoutes);