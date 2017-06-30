// Angular
import { Component, OnInit } from '@angular/core';

// Service
import { PlatformsService } from '../../_service/platform.service';
import { FooterService } from '../../_service/footer.service';

// Model
import { Platform } from '../../_model/platform';

@Component({
    moduleId: module.id,
    selector: 'app-platforms-register',
    templateUrl: './platform-register.component.html',
    styleUrls: ['./platform-register.component.css' ]
})
export class PlatformsRegisterComponent implements OnInit {

    success: boolean;

    show: boolean;

    message: string;

    private id: number;

    constructor(private platformService: PlatformsService, footerService: FooterService) {

        footerService.fixFooter(true);

    }

    ngOnInit() {

        this.success = true;

        this.show = false;

        this.message = 'A plataforma foi cadastrada com sucesso.';

    }

    // Função de callback, retorna o erro ao usuário

    callBack(error) {

        console.log(error);

        this.show = true;

        this.success = false;

        this.message = 'Falha ao cadastrar a plataforma.';

    }

    // Função chamada quando submete o formulário

    onSubmit(form) {

        console.log(form.value);

        this.platformService.registerPlatform(form.value).subscribe(

            (platform: Platform) => {

                console.log(platform);

                this.id = platform.id;

                console.log(platform.id);

                this.show = true;

            }, error => this.callBack(error));

    }

    // Validações

    checkValidTouched(field) {

        return !field.valid && field.touched;

    }

    applyCssError(field) {

        return {

            'textError': this.checkValidTouched(field)

        };

    }

}
