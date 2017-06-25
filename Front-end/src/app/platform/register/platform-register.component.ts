import { Component } from '@angular/core';

import { PlatformsService } from '../../_services/platform.service';

import { Platform } from './../../_models/platform';

@Component({
    moduleId: module.id,
    selector: 'app-platforms-register',
    templateUrl: './platform-register.component.html',
    styleUrls: ['./platform-register.component.css' ]
})
export class PlatformsRegisterComponent {

    success = true;

    show = false;

    message = 'A plataforma foi cadastrada com sucesso.';

    private fileList: FileList;

    constructor(private platformService: PlatformsService) { }

    onSubmit(form){

        this.platformService.registerPlatform(form.value).subscribe(

            (platform: Platform[]) => {

                console.log(platform);

                this.show = true;

            }), error => {

            console.log(error);

            this.show = true;

            this.success = false;

            this.message = 'Falha ao cadastrar a plataforma.';

        };

        if (this.fileList) {

            if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                this.platformService.registerPlatformImage(formData).subscribe(
                    (platform: Platform[]) => {

                        console.log(platform);

                        this.show = true;

                    }), error => {

                    console.log(error);

                    this.show = true;

                    this.success = false;

                    this.message = 'Falha ao cadastrar a plataforma.';

                };

            }

        }

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
