import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GamesListingComponent } from './listing/games/games-listing.component';
import { PlatformsListingComponent } from './listing/platforms/platforms-listing.component';
import { routing } from './app.routes';

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent, 
    PlatformsListingComponent, 
    FooterComponent,
    HeaderComponent,
    GamesListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
