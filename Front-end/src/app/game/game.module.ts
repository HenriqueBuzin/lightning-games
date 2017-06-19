import { NgModule } from '@angular/core';

import { GameService } from '../_services/game.service';

import { GameEditComponent } from './edit/game-edit.component';

import { GamesListingComponent } from './listing/game-listing.component';

import { GamesRegisterComponent } from './register/game-register.component';

import { CommonModule } from '@angular/common';

import { FormControlModule } from '../_directives/form-control/form-control.module';

import { routing } from './game.routes';

import { GameComponent } from './game.component';

@NgModule({
    declarations: [
        GamesRegisterComponent,
        GamesListingComponent,
        GameEditComponent,
        GameComponent
    ],
    imports: [
        routing,
        CommonModule,
        FormControlModule
    ],
    providers: [
        GameService
    ]
})

export class GameModule { }