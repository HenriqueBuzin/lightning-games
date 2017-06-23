import { NgModule } from '@angular/core';

import { GameService } from '../_services/game.service';

import { GameEditComponent } from './edit/game-edit.component';

import { GamesListingComponent } from './listing/game-listing.component';

import { GamesRegisterComponent } from './register/game-register.component';

import { CommonModule } from '@angular/common';

import { FormControlModule } from '../_directives/form-control/form-control.module';

import { routing } from './game.routes';

import { GameComponent } from './game.component';

import { PlatformsService } from './../_services/platform.service';

import { ManufactureService } from './../_services/manufacture.service';

import {SearchGamePipe} from './pipes/search-game.pipe';

import {SeparatorPipe} from './pipes/separator.pipe';

@NgModule({
    declarations: [
        GamesRegisterComponent,
        GamesListingComponent,
        GameEditComponent,
        SearchGamePipe,
        GameComponent,
        SeparatorPipe
    ],
    imports: [
        routing,
        CommonModule,
        FormControlModule
    ],
    providers: [
        GameService,
        PlatformsService,
        ManufactureService
    ]
})

export class GameModule { }