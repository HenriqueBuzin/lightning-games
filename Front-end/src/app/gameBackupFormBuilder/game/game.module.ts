// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Component
import { GamesRegisterComponent } from './register/game-register.component';
import { GamesListingComponent } from './listing/game-listing.component';
import { GameEditComponent } from './edit/game-edit.component';
import { GameComponent } from './game.component';

// Services
import { ManufactureService } from '../../_services/manufacture.service';
import { PlatformsService } from '../../_services/platform.service';
import { GameService } from '../../_services/game.service';

// Directive
import { FormControlModule } from '../../_directives/form-control/form-control.module';

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
        SeparatorCurrencyPipe,
        SeparatorArrayPipe,
        GameEditComponent,
        SearchGamePipe,
        GameComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormControlModule,
        CommonModule,
        routing
    ],
    providers: [
        ManufactureService,
        PlatformsService,
        GameService
    ]
})

export class GameModule { }
