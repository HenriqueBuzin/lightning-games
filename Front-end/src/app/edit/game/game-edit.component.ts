import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-game-edit',
    templateUrl: './game-edit.component.html',
    styleUrls: ['./game-edit.component.css', '../styles.css' ]
})
export class GameEditComponent implements OnInit {

    game: any = {

        name: null,

        manufactures: null,

        category: null,

        price: null,

        quantity: null,

        production: null,

        imageFullPath: null,

        description: null,

        platforms: null

    }

    private id;

    platforms: Object[] = [];

    manufactures: Object[] = [];

    constructor(private http: Http, private activatedRoute: ActivatedRoute) {

        this.http.get('http://localhost:8080/lightning/api/platform')
            .map(res => res.json()).subscribe(platforms => {

            this.platforms = platforms;

            console.log(this.platforms);

        }), erro => console.log(erro);

        this.http.get('http://localhost:8080/lightning/api/manufacture')
            .map(res => res.json()).subscribe(manufactures => {

            this.manufactures = manufactures;

            console.log(this.manufactures);

        }), erro => console.log(erro);

    }

    ngOnInit() {

        this.activatedRoute.params.subscribe((params: Params) => {

            this.id = params['id'];

            console.log(this.id);

        });

        this.http.get('http://localhost:8080/lightning/api/game/' + this.id)

            .map(res => res.json()).subscribe(game => {

            this.game.name = game.name;

            this.game.manufactures = game.manufacture;

            this.game.category = game.category;

            this.game.price = game.price;

            this.game.quantity = game.quantity;

            this.game.production = game.production;

            this.game.imageFullPath = game.imageFullPath;

            this.game.description = game.description;

            this.game.platforms = game.platform;

            console.log(this.game);

        }), erro => console.log(erro);

    }

    onSubmit(form){

        console.log(form);


    }

    verificaValidTouched(campo){

        return !campo.valid && campo.touched;

    }

}