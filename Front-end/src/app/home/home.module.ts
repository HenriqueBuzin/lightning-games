import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { routing } from './home.routes';

import { HomeComponent } from './home.component';

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