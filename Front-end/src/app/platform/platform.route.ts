import { RouterModule, Routes } from '@angular/router';

import { PlatformsRegisterComponent  } from './register/platform-register.component';

import { PlatformsListingComponent } from './listing/platform-listing.component';

import { PlatformEditComponent } from './edit/platform-edit.component';

import { PlatformComponent } from './platform.component';


const appRoutes: Routes = [

    {

        path: '', component: PlatformComponent,

        children: [

            { path: '', component: PlatformsListingComponent },

            { path: 'cadastrar', component: PlatformsRegisterComponent },

            { path: 'editar/:id', component: PlatformEditComponent }

        ]

    }

];

export const routing = RouterModule.forChild(appRoutes);