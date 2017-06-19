import { RouterModule, Routes } from '@angular/router';

import { ManufacturesRegisterComponent  } from './register/manufactures-register.component';

import { ManufacturesListingComponent } from './listing/manufactures-listing.component';

import { ManufactureEditComponent } from './edit/manufacture-edit.component';

const manufactureRoutes: Routes = [

    { path: '', component: ManufacturesListingComponent },

    { path: 'cadastrar', component: ManufacturesRegisterComponent },

    { path: 'editar/:id', component: ManufactureEditComponent }

];

export const routing = RouterModule.forRoot(manufactureRoutes);