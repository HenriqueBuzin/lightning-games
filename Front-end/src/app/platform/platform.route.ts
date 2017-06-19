import { RouterModule, Routes } from '@angular/router';

import { PlatformsRegisterComponent  } from './register/platform-register.component';
import { PlatformsListingComponent } from './listing/platform-listing.component';
import { PlatformEditComponent } from './edit/platform-edit.component';

const appRoutes: Routes = [

    { path: '', component: PlatformsRegisterComponent },

    { path: 'cadastrar', component: PlatformsListingComponent },

    { path: 'editar/:id', component: PlatformEditComponent }

];

export const routing = RouterModule.forRoot(appRoutes);