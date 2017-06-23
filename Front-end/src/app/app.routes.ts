// Angular
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Login
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./_guards/auth-guard";

const appRoutes: Routes = [

    { path: '', redirectTo: 'inicio', canActivate: [ AuthGuard ], pathMatch: 'full' },

    { path: 'inicio', canActivate: [ AuthGuard ], loadChildren: 'app/home/home.module#HomeModule' },

    { path: "jogo", canActivate: [ AuthGuard ], loadChildren: 'app/game/game.module#GameModule' },

    { path: "plataforma", canActivate: [ AuthGuard ], loadChildren: 'app/platform/platform.module#PlatformModule' },

    { path: "fabricante", canActivate: [ AuthGuard ], loadChildren: 'app/manufacture/manufacture.module#ManufactureModule' },

    { path: "usuario", canActivate: [ AuthGuard ], loadChildren: 'app/user/user.module#UserModule' },

    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' }

];

export const routing = RouterModule.forRoot(appRoutes);