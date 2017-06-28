// Angulae
import { ActivatedRoute, Params } from '@angular/router';
import {Component, OnInit} from '@angular/core';

// Models
import { Manufacture } from './../../_models/manufacture';
import { GameService } from './../../_services/game.service';
import { Platform } from './../../_models/platform';
import { Game } from './../../_models/game';

// Service
import { ManufactureService } from './../../_services/manufacture.service';
import { PlatformsService } from './../../_services/platform.service';
import {FooterService} from "../../_services/footer.service";

@Component({
    moduleId: module.id,
    selector: 'app-game-edit',
    templateUrl: './game-edit.component.html',
    styleUrls: ['./game-edit.component.css' ]
})
export class GameEditComponent implements OnInit {

    manufactures: Manufacture[] = [];

    platforms: Platform[] = [];

    games: Game[] = [];

    success: boolean;

    show: boolean;

    message: string;

    private id: number;

    private fileList: FileList;

    private selected: boolean;

    private focusOut: boolean;

    private focus: boolean;

    private focusCheckbox: boolean;

    private focusOutCheckbox: boolean;

    private idPlatform: number[] = [];

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

        this.focusCheckbox = true;

        this.focusOutCheckbox = false;

        this.selected = false;

        this.focusOut = true;

        this.focus = false;

        this.show = false;

        this.success = true;

        this.message = 'O jogo foi editado com sucesso.';

        this.platformService.getPlatforms().subscribe(

            (platforms: Platform[]) => {

                this.platforms = platforms;

        }), error => console.log(error);

        this.manufactureService.getManufactures().subscribe(

            (manufactures: Manufacture[]) => {

                this.manufactures = manufactures;

        }), error => console.log(error);

        this.activatedRoute.params.subscribe(

            (params: Params) => {

                this.id = params['id'];

                this.gameService.getGame(this.id).subscribe(

                    (games: Game[]) => {

                        this.games = games;

                        console.log(games);

                }), error => console.log(error);

        });

    }

    // Retorna um callback para o usuário

    callBack(error) {

        console.log(error);

        this.show = true;

        this.success = false;

        this.message = 'Falha ao editar o jogo.';

    }

    // Realiza o procedimento de cadastro da imagem.

    uploadImage(id) {

        if (this.fileList) {

            if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                this.gameService.editGameImage(formData, id).subscribe(
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

    // Função do form sendo submetido

    onSubmit(form) {

        console.log(form.value);

        this.gameService.editGame(form.value).subscribe(form => {

            console.log(form);

            this.show = true;

        }), error => this.callBack(error);

    }

    // Ao selecionar a imagem, esta função adiciona ela a variável global para ser acessada no formulário como único.

    fileChange(target) {

        this.fileList = target.files;

        console.log(this.fileList);

    }

    // Validações

    checkValidTouched(field){

        return !field.valid && field.touched;

    }

    applyCssError(field){

        return {

            'subError': this.checkValidTouched(field)

        }

    }

    // Validar Radio

    setterFocus(){

        this.focus = true;

        console.log('Focus: ', this.focus);

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

    // Validar Checkbox

    onClicked(platform, event) {

        if(this.idPlatform.indexOf(platform.id) !== -1){

            this.idPlatform.splice(this.idPlatform.indexOf(platform.id), 1);

        }else{

            this.idPlatform.push(platform.id);

        }

        console.log('---');

        console.log('Id da Plataforma: ', this.idPlatform);

        console.log('Ver: ', event.target.checked);

        console.log('---');

    }

    setterFocusCheckbox() {

        this.focusCheckbox = false;

        console.log('---');

        console.log('FocusOut Checkbox: ', this.focusOutCheckbox);

        console.log('---');

    }

    setterFocusOutCheckbox() {

        this.focusCheckbox = true;

        console.log('---');

        console.log('Focus Checkbox: ', this.focusCheckbox);

        console.log('---');

    }

    verifyCheckbox() {

        let flag: boolean;

        if (this.focusCheckbox == true && this.focusOutCheckbox == false && this.idPlatform == null) {

            flag = true;

        } else {

            flag = false;

        }

        // console.log('Flag: ', flag);

        return flag;

    }

}
