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
import { FormControlModule } from './_directives/form-control/form-control.module';
import { AuthService } from './_services/auth.service';

// Others
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// Guards
import { AuthChildGuard } from "./_guards/auth-child-guard";
import {AuthGuard} from "./_guards/auth-guard";

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
        BrowserAnimationsModule,
        FormControlModule,
        MdDialogModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        AuthChildGuard,
        AuthService,
        AuthGuard
    ],
    entryComponents: [ DialogComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }