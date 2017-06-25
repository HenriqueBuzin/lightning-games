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

    private fileList: FileList;

    success = true;

    show = false;

    message = 'O jogo foi cadastrado com sucesso.';

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

    onSubmit(form) {

        if (this.fileList) {

            if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                this.gameService.editGameImage(formData).subscribe(
                    (game: Game[]) => {

                        console.log(game);

                        this.show = true;

                    }), erro => {

                    console.log(erro);

                    this.show = true;

                    this.success = false;

                    this.message = 'Falha ao cadastrar o jogo.';

                };

            }

        } else {

            this.gameService.editGame(form.value).subscribe(form => {

                console.log(form);

                this.show = true;

            }), erro => {

                console.log(erro);

                this.show = true;

                this.success = false;

                this.message = 'Falha ao cadastrar o jogo.';

            };

        }

    }

    fileChange(target) {

        this.fileList = target.files;

        console.log(this.fileList);

    }

    checkValidTouched(field){

        return !field.valid && field.touched;

    }

    applyCssError(field){

        return {

            'subError': this.checkValidTouched(field)

        }

    }

}