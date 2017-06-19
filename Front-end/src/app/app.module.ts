// Angular
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MdDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// Essentials
import { DialogComponent } from './_directives/dialog/dialog.component';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import 'rxjs/add/operator/map';

// Services
import { AuthService } from './_services/auth.service';

//
import { GameModule } from './game/game.module';
import { ManufactureModule } from './manufacture/manufacture.module';
import { PlatformModule } from './platform/platform.module';
import { UserModule } from './user/user.module';


import { FormControlModule } from './_directives/form-control/form-control.module';


// Others
import { FormControlComponent } from './_directives/form-control/form-control.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// Guards
import {RegisterGuard} from "./_guards/register-guard";
import {ListingGuard} from "./_guards/listing-guard";
import {AuthGuard} from "./_guards/auth-guard";
import {EditGuard} from "./_guards/auth-child-guard";

// External
import 'hammerjs';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        DialogComponent,
        LoginComponent,
        HomeComponent,
        AppComponent
    ],
    imports: [
        GameModule,
        ManufactureModule,
        // PlatformModule,
        // UserModule,
        BrowserAnimationsModule,
        MdDialogModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        FormControlModule
    ],
    providers: [
        RegisterGuard,
        ListingGuard,
        AuthService,
        EditGuard,
        AuthGuard
    ],
    entryComponents: [ DialogComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }