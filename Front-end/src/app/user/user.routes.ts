// Angular
import { RouterModule, Routes } from '@angular/router';

// Components
import { UsersRegisterComponent  } from './register/user-register.component';
import { UsersListingComponent } from './listing/user-listing.component';
import { UserEditComponent } from './edit/user-edit.component';
import { UserComponent } from './user.component';

// Guard (Child)
import { AuthChildGuard } from '../_guard/auth-child-guard';

const userRoutes: Routes = [

    {

        path: '', component: UserComponent, canActivateChild: [ AuthChildGuard ],

        children: [

            { path: '', component: UsersListingComponent },

            { path: 'cadastrar', component: UsersRegisterComponent },

            { path: 'editar/:id', component: UserEditComponent }

        ]

    }

];

export const routing = RouterModule.forChild(userRoutes);
