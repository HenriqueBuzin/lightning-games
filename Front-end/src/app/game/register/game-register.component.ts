import { Component } from '@angular/core';

import { Manufacture } from '../../_models/manufacture';

import { Platform } from '../../_models/platform';

import {PlatformsService} from "../../_services/platform.service";

import {ManufactureService} from "../../_services/manufacture.service";
import {GameService} from "../../_services/game.service";

@Component({
    moduleId: module.id,
    selector: 'app-games-register',
    templateUrl: './game-register.component.html',
    styleUrls: ['./game-register.component.css' ]
})
export class GamesRegisterComponent {

    manufactures: Manufacture[] = [];

    platforms: Platform[] = [];

    private fileList: FileList;

    constructor(
        private platformService: PlatformsService,
        private manufactureService: ManufactureService,
        private gameService: GameService
    ){

        this.platformService.getPlatforms().subscribe(platforms => { this.platforms = platforms; }), erro => console.log(erro);

        this.manufactureService.getManufactures().subscribe(manufactures => { this.manufactures = manufactures; }), erro => console.log(erro);

    }

    onSubmit(form){

        if(this.fileList){

            if(this.fileList.length > 0) {

                // Funcionando

            }

        }else{

            this.gameService.registerGame(form.value).subscribe(form => {

                console.log(form);

            }), erro => console.log(erro);

        }

    }

    fileChange(event) {

        this.fileList = event.target.files;

    }

    checkValidTouched(field){

        return !field.valid && field.touched;

    }

    applyCssErrorLabel(field){

        return {

            'textError': this.checkValidTouched(field)

        }

    }

}