// Angular
import { RouterModule, Routes } from '@angular/router';

// Components
import { ManufacturesRegisterComponent  } from './register/manufacture-register.component';
import { ManufacturesListingComponent } from './listing/manufacture-listing.component';
import { ManufactureEditComponent } from './edit/manufacture-edit.component';
import { ManufactureComponent } from './manufacture.component';

// Guard (Child)
import {AuthChildGuard} from '../_guard/auth-child-guard';

const manufactureRoutes: Routes = [

    {

        path: '', component: ManufactureComponent, canActivateChild: [ AuthChildGuard ],

        children: [

            { path: '', component: ManufacturesListingComponent },

            { path: 'cadastrar', component: ManufacturesRegisterComponent },

            { path: 'editar/:id', component: ManufactureEditComponent }

        ]

    }

];

export const routing = RouterModule.forChild(manufactureRoutes);
