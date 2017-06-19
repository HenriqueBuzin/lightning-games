import { RouterModule, Routes } from '@angular/router';

import { GamesRegisterComponent  } from './register/games-register.component';
import { GamesListingComponent } from './listing/games-listing.component';
import { GameEditComponent } from './edit/game-edit.component';

const gameRoutes: Routes = [

    { path: 'listar', component: GamesListingComponent },

    { path: 'cadastrar', component: GamesRegisterComponent },

    { path: 'editar/:id', component: GameEditComponent }

];

export const routing = RouterModule.forRoot(gameRoutes);