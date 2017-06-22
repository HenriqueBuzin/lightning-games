import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {AuthService} from "../_services/auth.service";

@Injectable()
export class AuthChildGuard implements CanActivateChild {

    constructor(private authService: AuthService, private router: Router) { }

    canActivateChild(

        route: ActivatedRouteSnapshot,

        state: RouterStateSnapshot

    ): Observable<boolean> | boolean {

        if(this.authService.authenticatedUser()){

            return true;

        }

        this.router.navigate(['/login']);

        return false;

    }

}