// Angular
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Model
import { Game } from './../_models/game';

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

    registerGameImage(image: FormData, id: number): Observable<Game[]> {

        this.headers = new Headers({'Content-Type' : 'multipart/form-data'});

        let array: any[] = [];

        array.push(image);

        array.push(id);

        return this.http
            .post('http://localhost:8080/lightning/api/image/game', array, this.options)
            .map((response: Response) => response)
            .catch(error => {

                throw new Error(error.message);

        });

    }

    editGameImage(image: FormData, id: number): Observable<Game[]> {

        this.headers = new Headers({'Content-Type' : 'multipart/form-data'});

        let array: any[] = [];

        array.push(image);

        array.push(id);

        return this.http
            .put('http://localhost:8080/lightning/api/image/game', array, this.options)
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