import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Injectable} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Manufacture } from '../_models/manufacture';

@Injectable()
export class ManufactureService {

    private headers: Headers;

    private options: RequestOptions;

    constructor(private http: Http) {

        this.headers = new Headers({'Content-Type': 'application/json'});

        this.options = new RequestOptions({ headers: this.headers });

    }

    getManufactures(): Observable<Manufacture[]> {

        return this.http
            .get('http://localhost:8080/lightning/api/manufacture', this.options)
            .map((response: Response) => <Manufacture[]> response.json())
            .catch(error => {

                throw new Error(error.message);

        });

    }

    getManufacture(id: number): Observable<Manufacture[]> {

        return this.http
            .get('http://localhost:8080/lightning/api/manufacture/' + id, this.options)
            .map((response: Response) => <Manufacture[]> response.json())
            .catch(error => {

            throw new Error(error.message);

        });

    }

    deleteManufacture(id: number): Observable<Manufacture[]> {

        return this.http
            .delete('http://localhost:8080/lightning/api/manufacture/' + id, this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    registerManufacture(manufacture: Manufacture): Observable<Manufacture[]> {

        return this.http
            .post('http://localhost:8080/lightning/api/manufacture', JSON.stringify(manufacture), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    registerManufactureImage(image: FormData): Observable<Manufacture[]> {

        this.headers = new Headers({'Content-Type' : 'multipart/form-data'});

        return this.http
            .post('http://localhost:8080/lightning/api/image', image, this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    editManufactureImage(image: FormData): Observable<Manufacture[]> {

        this.headers = new Headers({'Content-Type' : 'multipart/form-data'});

        return this.http
            .put('http://localhost:8080/lightning/api/image', image, this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    editManufacture(manufacture: Manufacture): Observable<Manufacture[]> {

        return this.http
            .put('http://localhost:8080/lightning/api/manufacture', JSON.stringify(manufacture), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

}