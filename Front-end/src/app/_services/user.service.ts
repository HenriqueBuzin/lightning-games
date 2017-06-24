import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Injectable, OnInit} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { User } from '../_models/user';

@Injectable()
export class UserService implements OnInit {

    private headers: Headers;

    private options: RequestOptions;

    constructor(private http: Http) { }

    ngOnInit(){

        this.headers = new Headers();

        this.headers.append('Content-Type', 'multipart/form-data');

        this.headers.append('Accept', 'application/json');

        this.options = new RequestOptions({ headers: this.headers });

    }

    getUsers(): Observable<User[]> {

        return this.http
            .get('http://localhost:8080/lightning/api/user', this.options)
            .map((response: Response) => <User[]> response.json())
            .catch(error => {

                throw new Error(error.message);

        });

    }

    getUser(id: number): Observable<User[]> {

        return this.http
            .get('http://localhost:8080/lightning/api/user/' + id, this.options)
            .map((response: Response) => <User[]> response.json())
            .catch(error => {

                throw new Error(error.message);

        });

    }

    deleteUser(id: number): Observable<User[]> {

        return this.http
            .delete('http://localhost:8080/lightning/api/user/' + id, this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    resetPassword(id: number){

        return this.http
            .get('http://localhost:8080/lightning/api/user/resetPassword/' + id, this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    registerUser(user: User): Observable<User[]> {

        return this.http
            .post('http://localhost:8080/lightning/api/user', JSON.stringify(user), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

}