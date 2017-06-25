// Angular
import { RouterModule, Routes } from '@angular/router';

// Component
import { PlatformsRegisterComponent  } from './register/platform-register.component';
import { PlatformsListingComponent } from './listing/platform-listing.component';
import { PlatformEditComponent } from './edit/platform-edit.component';
import { PlatformComponent } from './platform.component';

// Guard (Child)
import { AuthChildGuard } from './../_guards/auth-child-guard';

const platformRoutes: Routes = [

    {

        path: '', component: PlatformComponent, canActivateChild: [ AuthChildGuard ],

        children: [

            { path: '', component: PlatformsListingComponent },

            { path: 'cadastrar', component: PlatformsRegisterComponent },

            { path: 'editar/:id', component: PlatformEditComponent }

        ]

    }

];

export const routing = RouterModule.forChild(platformRoutes);
