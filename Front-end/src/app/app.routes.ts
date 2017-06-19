// Angular
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Login
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./_guards/auth-guard";

const appRoutes: Routes = [

    { path: '', canActivate: [ AuthGuard ], component: HomeComponent },

    { path: 'inicio', canActivate: [ AuthGuard ], component: HomeComponent },

    { path: 'login', component: LoginComponent },

    { path: "jogo", canActivate: [ AuthGuard ], loadChildren: "app/game/game.module#GameModule" },

    { path: "plataforma", canActivate: [ AuthGuard ], loadChildren: "app/platform/platform.module#PlatformModule"  },

    { path: "fabricante", canActivate: [ AuthGuard ], loadChildren: "app/manufacture/manufacture.module#ManufactureModule"  },

    { path: "usuario", canActivate: [ AuthGuard ], loadChildren: "app/user/user.module#UserModule"  },

    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);