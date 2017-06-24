import { Http, Headers, RequestOptions } from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models/user';

@Injectable()
export class AuthService {

    menuEmitter = new EventEmitter<boolean>();

    alertEmitter = new EventEmitter<boolean>();

    footerEmitter = new EventEmitter<boolean>();

    private authenticated: boolean = false;

    constructor(private http: Http, private router: Router) { }

    login(user: User){

        let headers = new Headers({ 'Content-Type': 'application/json' });

        let options = new RequestOptions({ headers: headers });

        this.http
            .post('http://localhost:8080/lightning/api/user/login', JSON.stringify(user), options)
            .map(res => res).subscribe(login => {

                if(login.json() != null){

                    this.authenticated = true;

                    this.menuEmitter.emit(true);

                    this.footerEmitter.emit(true);

                    localStorage.setItem('userName', login.json().name);

                    this.router.navigate(['/inicio']);

                }else{

                    this.alertEmitter.emit(true);

                    this.authenticated = false;

                    this.menuEmitter.emit(false);

                }

            }), erro => console.log(erro);

    }

    authenticatedUser(){

        return this.authenticated;

    }

    logout(){

        this.authenticated = false;

        this.menuEmitter.emit(false);

        this.alertEmitter.emit(false);

        this.footerEmitter.emit(false);

        localStorage.removeItem('userName');

        this.router.navigate(['/login']);

    }

}