import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Platform } from '../_models/platform';

@Injectable()
export class PlatformsService {

    constructor(private http: Http) { }

    getPlatforms(): Observable<Platform[]> {

        return this.http.get('http://localhost:8080/lightning/api/platform').map(res => res.json()).catch(error => {

            throw new Error(error.message);

        });

    }

    getPlatform(id: number): Observable<Platform[]> {

        return this.http.get('http://localhost:8080/lightning/api/platform/' + id).map(res => res.json()).catch(error => {

            throw new Error(error.message);

        });

    }

    deletePlatform(id: number): Observable<Platform[]>{

        return this.http.delete('http://localhost:8080/lightning/api/platform/' + id).map(res => res).catch(error => {

            throw new Error(error.message);

        });

    }

    registerPlatform(platform: Platform): Observable<Platform[]> {

        let headers = new Headers({ 'Content-Type': 'application/json' });

        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8080/lightning/api/platform', JSON.stringify(platform), options).map(res => res).catch(error => {

            throw new Error(error.message);

        });

    }

}
