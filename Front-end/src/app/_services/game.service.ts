import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Game } from './../_models/game';

@Injectable()
export class GameService implements OnInit {

    private headers: Headers;

    private options: RequestOptions;

    constructor(private http: Http) { }

    ngOnInit(){

        this.headers = new Headers();

        this.headers.append('Content-Type', 'multipart/form-data');

        this.headers.append('Accept', 'application/json');

        this.options = new RequestOptions({ headers: this.headers });

    }

    getGames(): Observable<Game[]> {

        return this.http
            .get('http://localhost:8080/lightning/api/game', this.options)
            .map((response: Response) => <Game[]> response.json())
            .catch(error => {

                throw new Error(error.message);

        });

    }

    getGame(id: number): Observable<Game[]> {

        return this.http
            .get('http://localhost:8080/lightning/api/game/' + id, this.options)
            .map((response: Response) => <Game[]> response.json())
            .catch(error => {

            throw new Error(error.message);

        });

    }

    deleteGame(id: number): Observable<Game[]> {

        return this.http
            .delete('http://localhost:8080/lightning/api/game/' + id, this.options)
            .map((response: Response) => response)
            .catch(error => {

            throw new Error(error.message);

        });

    }

    registerGame(game: Game): Observable<Game[]> {

        return this.http
            .post('http://localhost:8080/lightning/api/game', JSON.stringify(game), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    registerGameImage(game: Game): Observable<Game[]> {

        return this.http
            .post('http://localhost:8080/lightning/api/game', JSON.stringify(game), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    editGameImage(game: Game): Observable<Game[]> {

        return this.http
            .post('http://localhost:8080/lightning/api/game', JSON.stringify(game), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    editGame(game: Game): Observable<Game[]> {

        return this.http
            .put('http://localhost:8080/lightning/api/game', JSON.stringify(game), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

}