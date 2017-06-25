// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Component
import { HomeComponent } from './home.component';

// Routes
import { routing } from './home.routes';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        routing
    ],
})

export class HomeModule { }