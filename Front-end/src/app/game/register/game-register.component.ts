// Angular
import { Component, OnInit } from '@angular/core';

// Service
import { ManufactureService } from './../../_services/manufacture.service';
import { PlatformsService } from './../../_services/platform.service';
import { FooterService } from './../../_services/footer.service';
import { GameService } from './../../_services/game.service';

// Model
import { Manufacture } from './../../_models/manufacture';
import { Platform } from './../../_models/platform';
import { Game } from './../../_models/game';

@Component({
    moduleId: module.id,
    selector: 'app-games-register',
    templateUrl: './game-register.component.html',
    styleUrls: ['./game-register.component.css' ]
})
export class GamesRegisterComponent implements OnInit {

    private fileList: FileList;

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
    ){

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

        }, error => console.log(error));

        this.manufactureService.getManufactures().subscribe(

            (manufactures: Manufacture[]) => {

                this.manufactures = manufactures;

        }, error => console.log(error));

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

    // Quando a imagem for selecionada, esta função atribui ela na variavél global, para depois ser submetida com o formulário como único.

    fileChange(target) {

        this.fileList = target.files;

        console.log(this.fileList);

    }

    // Realiza o procedimento de upload de imagem

    uploadImage(id) {

        if (this.fileList) {

            if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                this.gameService.registerGameImage(formData, id).subscribe(

                    (game: Game[]) => {

                        console.log(game);

                        this.show = true;

                    }), error => this.callBack(error);

            } else {

                this.callBack('Validação menor ou igual a 0');

            }

        } else {

            this.callBack('Validação imagem retornou null');

        }

    }

    // Validação do Formulário

    checkValidTouched(field) {

        return !field.valid && field.touched;

    }

    applyCssError(field) {

        return {

            'textError': this.checkValidTouched(field)

        }

    }

    // Validar Radio

    setterFocus() {

        this.focus = true;

        // console.log('Focus: ', this.focus);

    }

    setterSelected() {

        this.selected = true;

        // console.log('Selected: ', this.selected);
    }

    setterFocusOut() {

        this.focusOut = false;

        // console.log('Focus: ', this.focusOut);

    }

    checkValidRadio() {

        let flag: boolean;

        if (this.focus == true && this.focusOut == false && this.selected == false) {

            flag = true;

        } else {

            flag = false;

        }

        // console.log('Flag: ', flag);

        return flag;

    }

    // Validar Plataformas

    setterFocusPlatform() {

        this.focusPlatform = true;

        // console.log('Focus: ', this.focus);

    }

    setterSelectedPlatform() {

        this.selectedPlatform = true;

        // console.log('Selected: ', this.selected);
    }

    setterFocusOutPlatform() {

        this.focusOutPlatform = false;

        // console.log('Focus: ', this.focusOut);

    }

    checkValidRadioPlatform() {

        let flag: boolean;

        if (this.focusPlatform == true && this.focusOutPlatform == false && this.selectedPlatform == false) {

            flag = true;

        } else {

            flag = false;

        }

        // console.log('Flag: ', flag);

        return flag;

    }

}
