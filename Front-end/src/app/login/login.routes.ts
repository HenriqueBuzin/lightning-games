// Angular
import { RouterModule, Routes } from '@angular/router';

// Component
import { LoginComponent } from './login.component';

const homeRoutes: Routes = [

    { path: '', component: LoginComponent }

];

export const routing = RouterModule.forChild(homeRoutes);