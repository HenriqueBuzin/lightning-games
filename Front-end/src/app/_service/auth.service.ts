// Angular
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { FooterService } from './footer.service';

// Model
import { User } from '../_model/user';

@Injectable()
export class AuthService {

    private authenticated = false;

    private headers: Headers;

    private options: RequestOptions;

    menuEmitter = new EventEmitter<boolean>();

    alertEmitter = new EventEmitter<boolean>();

    constructor(private http: Http, private router: Router, private footerService: FooterService) {

        this.headers = new Headers({'Content-Type': 'application/json'});

        this.options = new RequestOptions({ headers: this.headers });

    }

    login(user: User) {

        this.http
            .post('http://localhost:8080/lightning/api/user/login', JSON.stringify(user), this.options)
            .map((response: Response) => response).subscribe(

                (login: any) => {

                    if (login.json() != null) {

                        console.log(login);

                        this.authenticated = true;

                        this.menuEmitter.emit(true);

                        localStorage.setItem('userName', login.json().name);

                        this.router.navigate(['/inicio']);

                    } else {

                        this.alertEmitter.emit(true);

                        this.authenticated = false;

                        this.menuEmitter.emit(false);

                        console.log(login);

                    }

            }, error => console.log(error));

    }

    authenticatedUser() {

        return this.authenticated;

    }

    logout() {

        this.authenticated = false;

        this.menuEmitter.emit(false);

        this.alertEmitter.emit(false);

        this.footerService.fixFooter(true);

        localStorage.removeItem('userName');

        this.router.navigate(['/login']);

    }

}
