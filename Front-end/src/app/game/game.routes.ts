import { RouterModule, Routes } from '@angular/router';

import { GamesRegisterComponent  } from './register/game-register.component';
import { GamesListingComponent } from './listing/game-listing.component';
import { GameEditComponent } from './edit/game-edit.component';
import { GameComponent } from './game.component';

import {AuthChildGuard} from "../_guards/auth-child-guard";

const gameRoutes: Routes = [

    {

        path: '', component: GameComponent, canActivateChild: [ AuthChildGuard ],

        children: [

            { path: '', component: GamesListingComponent },

            { path: 'cadastrar', component: GamesRegisterComponent },

            { path: 'editar/:id', component: GameEditComponent }

        ]

    }

];

export const routing = RouterModule.forChild(gameRoutes);