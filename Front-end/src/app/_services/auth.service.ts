import { EventEmitter, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers, RequestOptions } from '@angular/http';

import { User } from '../_models/user';

@Injectable()
export class AuthService {

    menuEmitter = new EventEmitter<boolean>();

    private authenticated: boolean = false;

    constructor(private http: Http, private router: Router) { }

    login(user: User){

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if(
            (user.email == 'teste@teste.com') &&
            (user.password == 'teste')
        ){

            this.authenticated = true;

            this.menuEmitter.emit(true);

           // this.router.navigate(['/inicio']);

            this.http
                .post('http://localhost:8080/lightning/api/user/login', JSON.stringify(user), options)
                .map(res => res).subscribe(login => {
                console.log(login);
                if(login == null){
                    console.log(2);
                }else{
                    console.log(9);
                }
            }), erro => console.log(erro);

            console.log(JSON.stringify(user));



        }else{

            this.authenticated = false;

            this.menuEmitter.emit(false);

        }

    }

    authenticatedUser(){

        return this.authenticated;

    }

}