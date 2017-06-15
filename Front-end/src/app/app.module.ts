// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Essential
import { DialogComponent } from './confirm-dialog/dialog.component';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import 'rxjs/add/operator/map';
// Pipes
import { CurrencyModule } from './pipes/currency/currency.module'
import { SeparatorModule } from './pipes/separator/separator.module'
import { SearchGameModule } from './pipes/search/game/search-game.module';
import { SearchManufactureModule } from './pipes/search/manufacture/search-manufacture.module';
import { SearchPlatformModule } from './pipes/search/platform/search-platform.module';
import { SearchUserModule } from './pipes/search/user/search-user.module';
// Other
import { FormControlComponent } from './form-control/form-control.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// Listing
import { UsersListingComponent } from './listing/users/users-listing.component';
import { ManufacturesListingComponent } from './listing/manufactures/manufactures-listing.component';
import { GamesListingComponent } from './listing/games/games-listing.component';
import { PlatformsListingComponent } from './listing/platforms/platforms-listing.component';
// Register
import { GamesRegisterComponent } from './register/games/games-register.component';
import { PlatformsRegisterComponent } from './register/platforms/platforms-register.component';
import { ManufacturesRegisterComponent } from './register/manufactures/manufactures-register.component';
import { UsersRegisterComponent } from './register/users/users-register.component';
// Edit
import { PlatformEditComponent } from './edit/platform/platform-edit.component';
import { ManufactureEditComponent } from './edit/manufacture/manufacture-edit.component';
import { UserEditComponent } from './edit/user/user-edit.component';
import { GameEditComponent } from './edit/game/game-edit.component';
// External
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdDialogModule } from '@angular/material';
import 'hammerjs';


@NgModule({
    declarations: [
        AppComponent,
        PlatformsListingComponent,
        FooterComponent,
        HeaderComponent,
        GamesListingComponent,
        ManufacturesListingComponent,
        UsersListingComponent,
        GamesRegisterComponent,
        PlatformsRegisterComponent,
        ManufacturesRegisterComponent,
        UsersRegisterComponent,
        HomeComponent,
        FormControlComponent,
        PlatformEditComponent,
        ManufactureEditComponent,
        UserEditComponent,
        GameEditComponent,
        DialogComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        CurrencyModule.forRoot(),
        SeparatorModule.forRoot(),
        SearchGameModule.forRoot(),
        SearchManufactureModule.forRoot(),
        SearchPlatformModule.forRoot(),
        SearchUserModule.forRoot(),
        BrowserAnimationsModule,
        MdDialogModule
    ],
    entryComponents: [ DialogComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
