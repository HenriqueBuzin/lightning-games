import { RouterModule, Routes } from '@angular/router';
import { GamesListingComponent } from './listing/games/games-listing.component';
import { PlatformsListingComponent } from './listing/platforms/platforms-listing.component';

const appRoutes: Routes = [
    { path: '', component: GamesListingComponent },
    { path: 'games', component: GamesListingComponent },
    { path: 'plataformas', component: PlatformsListingComponent },
    { path: '**', component: GamesListingComponent }
];

export const routing = RouterModule.forRoot(appRoutes);