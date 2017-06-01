// Angular
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// Listing
import { GamesListingComponent } from './listing/games/games-listing.component';
import { PlatformsListingComponent } from './listing/platforms/platforms-listing.component';
import { ManufacturesListingComponent } from './listing/manufactures/manufactures-listing.component';
import { UsersListingComponent } from './listing/users/users-listing.component';
// Registers
import { GamesRegisterComponent } from './register/games/games-register.component';
import { ManufacturesRegisterComponent } from './register/manufactures/manufactures-register.component';
import { PlatformsRegisterComponent } from './register/platforms/platforms-register.component';
import { UsersRegisterComponent } from './register/users/users-register.component';

const appRoutes: Routes = [

    { path: '', component: GamesListingComponent },

    { path: 'inicio', component: HomeComponent },

    { path: 'listar',
        children: [
            { path: '', component: HomeComponent },

            { path: 'jogos', component: GamesListingComponent },
            { path: 'fabricantes', component: ManufacturesListingComponent },
            { path: 'plataformas', component: PlatformsListingComponent },
            { path: 'usuarios', component: UsersListingComponent },
            { path: '**', component: HomeComponent }
        ]
    },

    { path: 'cadastrar',
        children: [
            { path: '', component: HomeComponent },
            { path: 'jogos', component: GamesRegisterComponent },
            { path: 'fabricantes', component: ManufacturesRegisterComponent },
            { path: 'plataformas', component: PlatformsRegisterComponent },
            { path: 'usuarios', component: UsersRegisterComponent },
            { path: '**', component: HomeComponent }
        ]
    },

    { path: '**', component: GamesListingComponent }

];

export const routing = RouterModule.forRoot(appRoutes);