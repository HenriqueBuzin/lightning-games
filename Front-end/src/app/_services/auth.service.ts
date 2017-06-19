import { EventEmitter, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { User } from '../_models/user';

@Injectable()
export class AuthService {

    menuEmitter = new EventEmitter<boolean>();

    private authenticated: boolean = false;

    constructor(private http: Http, private router: Router) { }

    getLogin(): Observable<any> {

        /*
        this.http.get('http://localhost:8080/lightning/api/game')
            .map(res => res.json()).subscribe(game => {

          this.game = game;

          console.log(this.game);

        }), erro => console.log(erro);
        */

        return null;

    }

    login(user: User){

        if(
            (user.email == 'teste@teste.com') &&
            (user.password == 'teste')
        ){

            this.authenticated = true;

            this.menuEmitter.emit(true);

            this.router.navigate(['/inicio']);

        }else{

            this.authenticated = false;

            this.menuEmitter.emit(false);

        }

    }

    authenticatedUser(){

        return this.authenticated;

    }

}