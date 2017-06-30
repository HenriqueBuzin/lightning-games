// Angular
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

// Service
import { AuthService } from '../_service/auth.service';

// Essential
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthChildGuard implements CanActivateChild {

    constructor(private authService: AuthService, private router: Router) { }

    canActivateChild(

        route: ActivatedRouteSnapshot,

        state: RouterStateSnapshot

    ): Observable<boolean> | boolean {

        if (this.authService.authenticatedUser()) {

            return true;

        }

        this.router.navigate(['/login']);

        return false;

    }

}
