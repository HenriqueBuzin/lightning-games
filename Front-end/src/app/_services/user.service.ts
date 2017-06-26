// Angular
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

// Model
import { User } from './../_models/user';

// Essential
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    private headers: Headers;

    private options: RequestOptions;

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {

        this.headers = new Headers({'Content-Type': 'application/json'});

        this.options = new RequestOptions({ headers: this.headers });

        return this.http
            .get('http://localhost:8080/lightning/api/user', this.options)
            .map((response: Response) => <User[]> response.json())
            .catch(error => {

                throw new Error(error.message);

        });

    }

    getUser(id: number): Observable<User[]> {

        this.headers = new Headers({'Content-Type': 'application/json'});

        this.options = new RequestOptions({ headers: this.headers });

        return this.http
            .get('http://localhost:8080/lightning/api/user/' + id, this.options)
            .map((response: Response) => <User[]> response.json())
            .catch(error => {

                throw new Error(error.message);

        });

    }

    deleteUser(id: number): Observable<User[]> {

        this.headers = new Headers({'Content-Type': 'application/json'});

        this.options = new RequestOptions({ headers: this.headers });

        return this.http
            .delete('http://localhost:8080/lightning/api/user/' + id, this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    resetPassword(id: number) {

        this.headers = new Headers({'Content-Type': 'application/json'});

        this.options = new RequestOptions({ headers: this.headers });

        return this.http
            .get('http://localhost:8080/lightning/api/user/resetPassword/' + id, this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    registerUser(user: User): Observable<User[]> {

        this.headers = new Headers({'Content-Type': 'application/json'});

        this.options = new RequestOptions({ headers: this.headers });

        return this.http
            .post('http://localhost:8080/lightning/api/user', JSON.stringify(user), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    registerUserImage(image: FormData, id: number): Observable<User[]> {

        this.headers = new Headers({'Content-Type' : 'multipart/form-data'});

        this.options = new RequestOptions({ headers: this.headers });

        let array: any[] = [];

        array.push(image);

        array.push(id);

        return this.http
            .post('http://localhost:8080/lightning/api/image/user', array, this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    editUserImage(image: FormData, id: number): Observable<User[]> {

        this.headers = new Headers({'Content-Type' : 'multipart/form-data'});

        this.options = new RequestOptions({ headers: this.headers });

        let array: any[] = [];

        array.push(image);

        array.push(id);

        return this.http
            .put('http://localhost:8080/lightning/api/image/user', array, this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    editUser(user: User): Observable<User[]> {

        console.log(JSON.stringify(user));

        this.headers = new Headers({'Content-Type': 'application/json'});

        this.options = new RequestOptions({ headers: this.headers });

        return this.http
            .put('http://localhost:8080/lightning/api/user', JSON.stringify(user), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

}