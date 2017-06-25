import { Component } from '@angular/core';

import { ManufactureService } from '../../_services/manufacture.service';
import { PlatformsService } from '../../_services/platform.service';
import { GameService } from '../../_services/game.service';

import { Manufacture } from '../../_models/manufacture';
import { Platform } from '../../_models/platform';
import {Game} from '../../_models/game';

@Component({
    moduleId: module.id,
    selector: 'app-games-register',
    templateUrl: './game-register.component.html',
    styleUrls: ['./game-register.component.css' ]
})
export class GamesRegisterComponent {

    manufactures: Manufacture[] = [];

    platforms: Platform[] = [];

    success = true;

    show = false;

    message = 'O jogo foi cadastrado com sucesso.';

    private fileList: FileList;

    constructor(
        private platformService: PlatformsService,
        private manufactureService: ManufactureService,
        private gameService: GameService
    ){

        this.platformService.getPlatforms().subscribe(
            (platforms: Platform[]) => {
                this.platforms = platforms;
        }), erro => console.log(erro);

        this.manufactureService.getManufactures().subscribe(
            (manufactures: Manufacture[]) => {
                this.manufactures = manufactures;
        }), erro => console.log(erro);

    }

    onSubmit(form) {

        this.gameService.registerGame(form.value).subscribe(form => {

            console.log(form);

            this.show = true;

        }), erro => {

            console.log(erro);

            this.show = true;

            this.success = false;

            this.message = 'Falha ao cadastrar o jogo.';

        };

        if (this.fileList) {

            if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                this.gameService.registerGameImage(formData).subscribe(
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

            'textError': this.checkValidTouched(field)

        }

    }

}