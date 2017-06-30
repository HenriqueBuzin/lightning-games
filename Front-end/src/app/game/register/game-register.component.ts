// Angular
import { Component, OnInit } from '@angular/core';

// Service
import { ManufactureService } from '../../_service/manufacture.service';
import { PlatformsService } from '../../_service/platform.service';
import { FooterService } from '../../_service/footer.service';
import { GameService } from '../../_service/game.service';

// Model
import { Manufacture } from '../../_model/manufacture';
import { Platform } from '../../_model/platform';
import { Game } from '../../_model/game';

@Component({
    moduleId: module.id,
    selector: 'app-games-register',
    templateUrl: './game-register.component.html',
    styleUrls: ['./game-register.component.css' ]
})

export class GamesRegisterComponent implements OnInit {

    manufactures: Manufacture[] = [];

    platforms: Platform[] = [];

    success: boolean;

    show: boolean;

    message: string;

    private selected: boolean;

    private focusOut: boolean;

    private focus: boolean;

    private selectedPlatform: boolean;

    private focusOutPlatform: boolean;

    private focusPlatform: boolean;

    constructor(
        private platformService: PlatformsService,
        private manufactureService: ManufactureService,
        private gameService: GameService,
        footerService: FooterService
    ) {

        footerService.fixFooter(false);

    }

    ngOnInit() {

        this.message = 'O jogo foi cadastrado com sucesso.';

        this.success = true;

        this.show = false;

        this.selected = false;

        this.focusOut = true;

        this.focus = false;

        this.selectedPlatform = false;

        this.focusOutPlatform = true;

        this.focusPlatform = false;

        this.platformService.getPlatforms().subscribe(

            (platforms: Platform[]) => {

                this.platforms = platforms;

        }, (error: any) => console.log(error));

        this.manufactureService.getManufactures().subscribe(

            (manufactures: Manufacture[]) => {

                this.manufactures = manufactures;

        }, (error: any) => console.log(error));

    }

    // Função de CallBack para o usuário.

    callBack(error) {

        console.log(error);

        this.show = true;

        this.success = false;

        this.message = 'Falha ao cadastrar o jogo.';

    }

    // Função chamada ao submeter o formulário

    onSubmit(form) {

        console.log(form.value);

        this.gameService.registerGame(form.value).subscribe(

            (game: Game[]) => {

                console.log(game);

                this.show = true;

        }, (error: any) => this.callBack(error));

    }

    // Validação do Formulário

    checkValidTouched(field) {

        return !field.valid && field.touched;

    }

    applyCssError(field) {

        return {

            'textError': this.checkValidTouched(field)

        };

    }

    // Validar Radio

    setterFocus() {

        this.focus = true;

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

    // Validar Plataformas

    setterFocusPlatform() {

        this.focusPlatform = true;

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
