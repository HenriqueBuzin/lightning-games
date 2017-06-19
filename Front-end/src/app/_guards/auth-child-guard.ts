import {ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class EditGuard implements CanActivateChild {

    canActivateChild(

        route: ActivatedRouteSnapshot,

        state: RouterStateSnapshot

    ): Observable<boolean> | boolean {

        console.log('Guarda de Rota Filha');

        return true;

    }

}