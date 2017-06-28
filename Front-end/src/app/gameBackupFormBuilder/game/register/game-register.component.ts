// Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Service
import { ManufactureService } from '../../../_services/manufacture.service';
import { PlatformsService } from '../../../_services/platform.service';
import { FooterService } from '../../../_services/footer.service';
import { GameService } from '../../../_services/game.service';

// Model
import { Manufacture } from '../../../_models/manufacture';
import { Platform } from '../../../_models/platform';
import { Game } from '../../../_models/game';

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

    private focusCheckbox: boolean;

    private focusOutCheckbox: boolean;

    private idPlatform: number[] = [];

    form: FormGroup;

    constructor(
        private manufactureService: ManufactureService,
        private platformService: PlatformsService,
        private gameService: GameService,
        private formBuilder: FormBuilder,
        footerService: FooterService
    ){

        footerService.fixFooter(false);

    }

    ngOnInit() {

        this.form = this.formBuilder.group({

            name: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(45) ]],

            category: [null, [ Validators.required, Validators.minLength(3) ]],

            price: [null, [ Validators.required, Validators.min(0) ]],

            quantity: [null, [ Validators.required, Validators.min(0) ]],

            production: [null],

            description: [null, [ Validators.required, Validators.minLength(15), Validators.maxLength(255) ]]

        });

        this.focusCheckbox = true;

        this.focusOutCheckbox = false;

        this.message = 'O jogo foi cadastrado com sucesso.';

        this.success = true;

        this.show = false;

        this.selected = false;

        this.focusOut = true;

        this.focus = false;

        this.platformService.getPlatforms().subscribe(

            (platforms: Platform[]) => {

                this.platforms = platforms;

        }), error => console.log(error);

        this.manufactureService.getManufactures().subscribe(

            (manufactures: Manufacture[]) => {

                this.manufactures = manufactures;

        }), error => console.log(error);

    }

    // Função de CallBack para o usuário.

    callBack(error) {

        console.log(error);

        this.show = true;

        this.success = false;

        this.message = 'Falha ao cadastrar o jogo.';

    }

    // Função chamada ao submeter o formulário

    onSubmit() {

        console.log(this.form.value);

        this.gameService.registerGame(this.form.value).subscribe(

            (game: Game[]) => {

                console.log(game);

                this.show = true;

                this.form.reset();

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

        return !this.form.get(field).valid && !this.form.get(field).touched;

    }

    applyCssError(field) {

        return {

            'textError': this.checkValidTouched(field)

        }

    }

    // Validar Radio

    setterFocus(){

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

    // Validar Checkbox

    setterFocusCheckbox() {

        this.focusCheckbox = false;

        // console.log('---');

        // console.log('FocusOut Checkbox: ', this.focusOutCheckbox);

        // console.log('---');

    }

    setterFocusOutCheckbox() {

        this.focusCheckbox = true;

        // console.log('---');

        // console.log('Focus Checkbox: ', this.focusCheckbox);

        // console.log('---');

    }

    verifyCheckbox() {

        let flag: boolean;

        if(this.focusOutCheckbox == true){

            flag = true;

        }else{

            flag = false;

        }

        // console.log('XXX');

        // console.log('Flag: ', flag);

        // console.log('XXX');

        return flag;

    }

    onClicked(platform, event) {

        if(this.idPlatform.indexOf(platform.id) !== -1){

            this.idPlatform.splice(this.idPlatform.indexOf(platform.id), 1);

        }else{

            this.idPlatform.push(platform.id);

        }

        // console.log('---');

        // console.log('Id da Plataforma: ', this.idPlatform);

        // console.log('Ver: ', event.target.checked);

        // console.log('---');

    }

}
