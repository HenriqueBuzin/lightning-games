import { Component } from '@angular/core';

import { Manufacture } from '../../_models/manufacture';

import { Platform } from '../../_models/platform';

import {PlatformsService} from "../../_services/platform.service";

import {ManufactureService} from "../../_services/manufacture.service";

@Component({
    moduleId: module.id,
    selector: 'app-games-register',
    templateUrl: './game-register.component.html',
    styleUrls: ['./game-register.component.css' ]
})
export class GamesRegisterComponent {

    manufactures: Manufacture[] = [];

    platforms: Platform[] = [];

    constructor(
        private platformService: PlatformsService,
        private manufactureService: ManufactureService
    ){

        this.platformService.getPlatforms().subscribe(platforms => { this.platforms = platforms; }), erro => console.log(erro);

        this.manufactureService.getManufactures().subscribe(manufactures => { this.manufactures = manufactures; }), erro => console.log(erro);

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