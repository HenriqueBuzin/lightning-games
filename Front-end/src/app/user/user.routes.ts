import { RouterModule, Routes } from '@angular/router';

import { UsersRegisterComponent  } from './register/users-register.component';
import { UsersListingComponent } from './listing/users-listing.component';
import { UserEditComponent } from './edit/user-edit.component';

const appRoutes: Routes = [

    { path: '', component: UsersListingComponent },

    { path: 'cadastrar', component: UsersRegisterComponent },

    { path: 'editar/:id', component: UserEditComponent }

];

export const routing = RouterModule.forRoot(appRoutes);