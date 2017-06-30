// Angulae
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Models
import { Manufacture } from '../../_model/manufacture';
import { GameService } from '../../_service/game.service';
import { Platform } from '../../_model/platform';
import { Game } from '../../_model/game';

// Service
import { ManufactureService } from '../../_service/manufacture.service';
import { PlatformsService } from '../../_service/platform.service';
import { FooterService } from '../../_service/footer.service';

@Component({
    moduleId: module.id,
    selector: 'app-game-edit',
    templateUrl: './game-edit.component.html',
    styleUrls: ['./game-edit.component.css' ]
})
export class GameEditComponent implements OnInit {

    manufactures: Manufacture[] = [];

    platforms: Platform[] = [];

    game: Game[] = [];

    success: boolean;

    show: boolean;

    message: string;

    private id: number;

    private selected: boolean;

    private focusOut: boolean;

    private focus: boolean;

    private selectedPlatform: boolean;

    private focusOutPlatform: boolean;

    private focusPlatform: boolean;

    constructor(
        private manufactureService: ManufactureService,
        private platformService: PlatformsService,
        private activatedRoute: ActivatedRoute,
        private gameService: GameService,
        footerService: FooterService
    ) {

        footerService.fixFooter(false);

    }

    ngOnInit() {

        this.selectedPlatform = false;

        this.focusOutPlatform = true;

        this.focusPlatform = false;

        this.selected = false;

        this.focusOut = true;

        this.focus = false;

        this.show = false;

        this.success = true;

        this.message = 'O jogo foi editado com sucesso.';

        this.platformService.getPlatforms().subscribe(

            (platforms: Platform[]) => {

                this.platforms = platforms;

                console.log(platforms);

        }, (error: any) => console.log(error));

        this.manufactureService.getManufactures().subscribe(

            (manufactures: Manufacture[]) => {

                this.manufactures = manufactures;

        }, (error: any) => console.log(error));

        this.activatedRoute.params.subscribe(

            (params: Params) => {

                this.id = params['id'];

                this.gameService.getGame(this.id).subscribe(

                    (game: Game[]) => {

                        this.game = game;

                        console.log(game);

                }, (error: any) => console.log(error));

        });

    }

    // Retorna um callback para o usuário

    callBack(error) {

        console.log(error);

        this.show = true;

        this.success = false;

        this.message = 'Falha ao editar o jogo.';

    }

    // Função do form sendo submetido

    onSubmit(form) {

        console.log(form.value);

        /*

        this.gameService.editGame(form.value).subscribe(

            (form: any) => {

            console.log(form);

            this.show = true;

        }, (error: any) => this.callBack(error));

        */

    }

    // Validações

    checkValidTouched(field) {

        return !field.valid && field.touched;

    }

    applyCssError(field) {

        return {

            'subError': this.checkValidTouched(field)

        };

    }

    // Validar Radio

    setterFocus() {

        this.focus = true;

        console.log('Focus: ', this.focus);

    }

    setterSelected() {

        this.selected = true;

    }

    setterFocusOut() {

        this.focusOut = false;

    }

    checkValidRadio() {

        let flag: boolean;

        if (this.focus === true && this.focusOut === false && this.selected === false) {

            flag = true;

        } else {

            flag = false;

        }

        return flag;

    }

    // Validar Checkbox

    setterFocusPlatform() {

        this.focusPlatform = true;

        console.log('Focus: ', this.focus);

    }

    setterSelectedPlatform() {

        this.selectedPlatform = true;

    }

    setterFocusOutPlatform() {

        this.focusOutPlatform = false;

    }

    checkValidRadioPlatform() {

        let flag: boolean;

        if (this.focusPlatform === true && this.focusOutPlatform === false && this.selectedPlatform === false) {

            flag = true;

        } else {

            flag = false;

        }

        return flag;

    }

}
