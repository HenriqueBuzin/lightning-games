import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { User } from '../_models/user';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {

        return this.http.get('http://localhost:8080/lightning/api/user').map(res => res.json()).catch(error => {

            throw new Error(error.message);

        });

    }

    getUser(id: number): Observable<User[]> {

        return this.http.get('http://localhost:8080/lightning/api/platform/' + id).map(res => res.json()).catch(error => {

            throw new Error(error.message);

        });

    }

    deleteUser(id: number): Observable<User[]> {

        return this.http.delete('http://localhost:8080/lightning/api/user/' + id).map(res => res).catch(error => {

            throw new Error(error.message);

        });

    }

    resetPassword(id){

        return this.http.get('http://localhost:8080/lightning/api/user/resetPassword/' + id).map(res => res).catch(error => {

            throw new Error(error.message);

        });

    }

}