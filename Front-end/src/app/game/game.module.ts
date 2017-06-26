// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Component
import { GamesRegisterComponent } from './register/game-register.component';
import { GamesListingComponent } from './listing/game-listing.component';
import { GameEditComponent } from './edit/game-edit.component';
import { GameComponent } from './game.component';

// Services
import { ManufactureService } from './../_services/manufacture.service';
import { PlatformsService } from './../_services/platform.service';
import { GameService } from './../_services/game.service';

// Directive
import { FormControlModule } from './../_directives/form-control/form-control.module';

// Routes
import { routing } from './game.routes';

// Pipes
import { SeparatorCurrencyPipe } from './pipes/separator-currency.pipe';
import { SeparatorArrayPipe } from './pipes/separator-array.pipe';
import { SearchGamePipe } from './pipes/search-game.pipe';

@NgModule({
    declarations: [
        GamesRegisterComponent,
        GamesListingComponent,
        GameEditComponent,
        SearchGamePipe,
        GameComponent,
        SeparatorArrayPipe,
        SeparatorCurrencyPipe
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
