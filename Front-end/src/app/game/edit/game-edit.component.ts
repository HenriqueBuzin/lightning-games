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

    private id: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        private gameService: GameService,
        private manufactureService: ManufactureService,
        private platformService: PlatformsService
    ) {

        this.platformService.getPlatforms().subscribe(platforms => { this.platforms = platforms; }), erro => console.log(erro);

        this.manufactureService.getManufactures().subscribe(manufactures => { this.manufactures = manufactures; }), erro => console.log(erro);

        this.activatedRoute.params.subscribe((params: Params) => { this.id = params['id']; });

        this.gameService.getGame(this.id).subscribe(games => { this.games = games; }), erro => console.log(erro);

    }

    onSubmit(form){

        console.log(form);

    }

    verificaValidTouched(campo){

        return !campo.valid && campo.touched;

    }

    aplicaCssErroInput(campo){

        return {

            'subError': this.verificaValidTouched(campo)

        }

    }

    aplicaCssErroLabel(campo){

        return {

            'textError': this.verificaValidTouched(campo)

        }

    }

}