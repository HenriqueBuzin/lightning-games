import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ManufactureService } from '../../_services/manufacture.service';
import { PlatformsService } from '../../_services/platform.service';
import { GameService } from '../../_services/game.service';

import { Manufacture } from '../../_models/manufacture';
import { Platform } from '../../_models/platform';

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
        private gameService: GameService,
        private router: Router
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

    onSubmit(form){

        console.log(form);

        /*
        if(this.fileList){

            if(this.fileList.length > 0) {

                // Funcionando

            }

        }else{

            this.gameService.registerGame(form.value).subscribe(form => {

                console.log(form);

                this.router.navigate(['/game']);

            }), error => console.log(error);

        }
        */

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