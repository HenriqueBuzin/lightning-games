import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Game } from '../_models/game';

@Injectable()
export class GameService {

    constructor(private http: Http) { }

    getGames(): Observable<Game[]> {

        return this.http.get('http://localhost:8080/lightning/api/game').map(res => res.json()).catch(error => {

            throw new Error(error.message);

        });

    }

    getGame(id: number): Observable<Game[]> {

        return this.http.get('http://localhost:8080/lightning/api/game/' + id).map(res => res.json()).catch(error => {

            throw new Error(error.message);

        });

    }

    deleteGame(id: number): Observable<Game[]> {

        return this.http.delete('http://localhost:8080/lightning/api/game/' + id).map(res => res).catch(error => {

            throw new Error(error.message);

        });

    }

    registerGame(game: Game): Observable<Game[]> {

        let headers = new Headers({ 'Content-Type': 'application/json' });

        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8080/lightning/api/game', JSON.stringify(game), options).map(res => res).catch(error => {

            throw new Error(error.message);

        });

    }

}