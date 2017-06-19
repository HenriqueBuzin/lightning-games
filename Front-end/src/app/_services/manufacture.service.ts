import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Manufacture } from '../_models/manufacture';

@Injectable()
export class ManufactureService {

    constructor(private http: Http) { }

    getManufactures(): Observable<Manufacture[]>{

        return this.http.get('http://localhost:8080/lightning/api/manufacture').map(res => res.json()).catch(error => {

            throw new Error(error.message);

        });

    }

    getManufacture(id: number): Observable<Manufacture[]> {

        return this.http.get('http://localhost:8080/lightning/api/manufacture/' + id).map(res => res.json()).catch(error => {

            throw new Error(error.message);

        });

    }

    deleteManufacture(id: number): Observable<Manufacture[]>{

        return this.http.delete('http://localhost:8080/lightning/api/manufacture/' + id).map(res => res).catch(error => {

            throw new Error(error.message);

        });

    }

}