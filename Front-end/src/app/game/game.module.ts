import { NgModule } from '@angular/core';

import { GameService } from '../_services/game.service';

import { GameEditComponent } from './edit/game-edit.component';

import { GamesListingComponent } from './listing/game-listing.component';

import { GamesRegisterComponent } from './register/game-register.component';

import { FormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { FormControlModule } from '../_directives/form-control/form-control.module';

import { routing } from './game.routes';

@NgModule({
    declarations: [
        GamesRegisterComponent,
        GamesListingComponent,
        GameEditComponent
    ],
    imports: [
        routing,
        CommonModule,
        FormControlModule,
        FormsModule
    ],
    providers: [
        GameService
    ]
})

export class GameModule { }