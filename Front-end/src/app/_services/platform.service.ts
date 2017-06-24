import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Injectable, OnInit} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Platform } from '../_models/platform';

@Injectable()
export class PlatformsService implements OnInit {

    private headers: Headers;

    private options: RequestOptions;

    constructor(private http: Http) { }

    ngOnInit(){

        this.headers = new Headers();

        this.headers.append('Content-Type', 'multipart/form-data');

        this.headers.append('Accept', 'application/json');

        this.options = new RequestOptions({ headers: this.headers });

    }

    getPlatforms(): Observable<Platform[]> {

        return this.http
            .get('http://localhost:8080/lightning/api/platform', this.options)
            .map((response: Response) => <Platform[]> response.json())
            .catch(error => {

                throw new Error(error.message);

        });

    }

    getPlatform(id: number): Observable<Platform[]> {

        return this.http
            .get('http://localhost:8080/lightning/api/platform/' + id, this.options)
            .map((response: Response) => <Platform[]> response.json())
            .catch(error => {

                throw new Error(error.message);

        });

    }

    deletePlatform(id: number): Observable<Platform[]>{

        return this.http
            .delete('http://localhost:8080/lightning/api/platform/' + id, this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    registerPlatform(platform: Platform): Observable<Platform[]> {

        return this.http
            .post('http://localhost:8080/lightning/api/platform', JSON.stringify(platform), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    registerPlatformImage(platform: Platform): Observable<Platform[]> {

        return this.http
            .post('http://localhost:8080/lightning/api/platform', JSON.stringify(platform), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    editPlatformImage(platform: Platform): Observable<Platform[]> {

        return this.http
            .post('http://localhost:8080/lightning/api/platform', JSON.stringify(platform), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    editPlatform(platform: Platform): Observable<Platform[]> {

        return this.http
            .post('http://localhost:8080/lightning/api/platform', JSON.stringify(platform), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

}