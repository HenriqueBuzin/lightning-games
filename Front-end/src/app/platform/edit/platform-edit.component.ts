// Angular
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Service
import { PlatformsService } from '../../_service/platform.service';
import { FooterService } from '../../_service/footer.service';

// Model
import { Platform } from '../../_model/platform';

@Component({
    moduleId: module.id,
    selector: 'app-platform-edit',
    templateUrl: './platform-edit.component.html',
    styleUrls: ['./platform-edit.component.css' ]
})

export class PlatformEditComponent implements OnInit {

    platform: Platform[] = [];

    success: boolean;

    show: boolean;

    message: string;

    private id: number;

    constructor(private activatedRoute: ActivatedRoute, private platformService: PlatformsService, footerService: FooterService) {

        footerService.fixFooter(true);

    }

    ngOnInit() {

        this.success = true;

        this.show = false;

        this.message = 'A plataforma foi editada com sucesso.';

        this.activatedRoute.params.subscribe(

            (params: Params) => {

                this.id = params['id'];

                this.platformService.getPlatform(this.id).subscribe(

                    (platform: Platform[]) => {

                        this.platform = platform;

                        console.log(platform);

                }, (error: any) => console.log(error));

        });

    }

    // Função de callback, retorna um aviso de erro ao usuário

    callBack(error) {

        console.log(error);

        this.show = true;

        this.success = false;

        this.message = 'Falha ao cadastrar a plataforma.';

    }

    // Função chamada ao submeter o formulário

    onSubmit(form) {

        console.log(JSON.stringify(form.value));

        this.platformService.editPlatform(form.value).subscribe(

            (platform: Platform[]) => {

                console.log(platform);

                this.show = true;

        }, (error: any) => this.callBack(error));

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
