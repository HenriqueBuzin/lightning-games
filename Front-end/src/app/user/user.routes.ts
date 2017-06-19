import { RouterModule, Routes } from '@angular/router';

import { UsersRegisterComponent  } from './register/user-register.component';
import { UsersListingComponent } from './listing/user-listing.component';
import { UserEditComponent } from './edit/user-edit.component';

import { UserModule } from './user.module';

const appRoutes: Routes = [

    {

        path: '', component: UserModule,

        children: [

            { path: '', component: UsersListingComponent },

            { path: 'cadastrar', component: UsersRegisterComponent },

            { path: 'editar/:id', component: UserEditComponent }

        ]

    }




];

export const routing = RouterModule.forChild(appRoutes);