// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Component
import { LoginComponent } from './login.component';

// Directives
import { FormControlModule } from '../_directive/form-control/form-control.module';

// Routes
import { routing } from './login.routes';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        routing,
        FormControlModule
    ]
})

export class LoginModule { }

