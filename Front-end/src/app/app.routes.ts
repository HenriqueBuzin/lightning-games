// Angular
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Login
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [

    { path: '', component: HomeComponent },

    { path: 'login', component: LoginComponent },


    { path: 'inicio', component: HomeComponent },

    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);