import { RouterModule, Routes } from '@angular/router';

import { PlatformsRegisterComponent  } from './register/platforms-register.component';
import { PlatformsListingComponent } from './listing/platforms-listing.component';
import { PlatformEditComponent } from './edit/platform-edit.component';

const appRoutes: Routes = [

    { path: '', component: PlatformsRegisterComponent },

    { path: 'cadastrar', component: PlatformsListingComponent },

    { path: 'editar/:id', component: PlatformEditComponent }

];

export const routing = RouterModule.forRoot(appRoutes);