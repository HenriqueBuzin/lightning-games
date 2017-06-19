// Angular
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Login
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [

    { path: '', component: HomeComponent },

    { path: 'inicio', component: HomeComponent },

    { path: 'login', component: LoginComponent },

    { path: "jogo", loadChildren: "app/game/game.module#GameModule" },

    { path: "plataforma", loadChildren: "app/platform/platform.module#PlatformModule"  },

    { path: "fabricante", loadChildren: "app/manufacture/manufacture.module#ManufactureModule"  },

    { path: "usuario", loadChildren: "app/user/user.module#UserModule"  },

    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);