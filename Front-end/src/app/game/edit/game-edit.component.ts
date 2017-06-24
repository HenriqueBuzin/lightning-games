import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';

import { Manufacture } from '../../_models/manufacture';
import { GameService } from '../../_services/game.service';
import { Platform } from '../../_models/platform';
import { Game } from '../../_models/game';
import {ManufactureService} from "../../_services/manufacture.service";
import {PlatformsService} from "../../_services/platform.service";

@Component({
    moduleId: module.id,
    selector: 'app-game-edit',
    templateUrl: './game-edit.component.html',
    styleUrls: ['./game-edit.component.css' ]
})
export class GameEditComponent {

    manufactures: Manufacture[] = [];

    platforms: Platform[] = [];

    games: Game[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private gameService: GameService,
        private manufactureService: ManufactureService,
        private platformService: PlatformsService
    ) {

        this.platformService.getPlatforms().subscribe(
            (platforms: Platform[]) => {
                this.platforms = platforms;
        }), erro => console.log(erro);

        this.manufactureService.getManufactures().subscribe(
            (manufactures: Manufacture[]) => {
                this.manufactures = manufactures;
        }), erro => console.log(erro);

        this.activatedRoute.params.subscribe(
            (params: Params) => {
                let id: number = params['id'];
                this.gameService.getGame(id).subscribe(
                    (games: Game[]) => {
                        this.games = games;
                }), erro => console.log(erro);
        });

    }

    onSubmit(form){

        console.log(form);

    }

    checkValidTouched(field){

        return !field.valid && field.touched;

    }

    applyCssErrorInput(field){

        return {

            'subError': this.checkValidTouched(field)

        }

    }

    applyCssErrorLabel(field){

        return {

            'textError': this.checkValidTouched(field)

        }

    }

}