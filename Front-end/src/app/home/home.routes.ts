// Angular
import { RouterModule, Routes } from '@angular/router';

// Component
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [

    { path: '', component: HomeComponent }

];

export const routing = RouterModule.forChild(homeRoutes);
