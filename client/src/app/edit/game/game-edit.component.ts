import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-game-edit',
    templateUrl: './game-edit.component.html',
    styleUrls: ['./game-edit.component.css' ]
})
export class GameEditComponent implements OnInit {

    game: any = {

        name: null,

        manufactureId: null,

        category: null,

        price: null,

        quantity: null,

        production: null,

        image: null,

        imageFullPath: null,

        description: null

    }

    private id;

    constructor(private http: Http, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

        this.activatedRoute.params.subscribe((params: Params) => {

            this.id = params['id'];

            console.log(this.id);

        });

        this.http.get('http://localhost:8080/lightning/api/game/' + this.id)

            .map(res => res.json()).subscribe(game => {

            this.game.name = game.name;

            this.game.manufactureId = game.manufactureId;

            this.game.category = game.category;

            this.game.price = game.price;

            this.game.quantity = game.quantity;

            this.game.production = game.production;

            this.game.image = game.image;

            this.game.imageFullPath = game.imageFullPath;

            this.game.description = game.description;

            console.log(this.game);

        }), erro => console.log(erro);

    }

    onSubmit(form){

    }

}