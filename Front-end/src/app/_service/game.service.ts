// Angular
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

// Model
import { Game } from '../_model/game';

// Essential
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameService {

    private headers: Headers;

    private options: RequestOptions;

    constructor(private http: Http) {

        this.headers = new Headers({'Content-Type': 'application/json'});

        this.options = new RequestOptions({ headers: this.headers });

    }

    getGames(): Observable<Game[]> {

        return this.http
            .get('http://localhost:8080/lightning/api/game', this.options)
            .map((response: Response) => <Game> response.json())
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

    editGame(game: Game): Observable<Game[]> {

        return this.http
            .put('http://localhost:8080/lightning/api/game', JSON.stringify(game), this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

}
