// Angular
import { Component, OnInit } from '@angular/core';

// Service
import { PlatformsService } from './../../_services/platform.service';
import { FooterService } from './../../_services/footer.service';

// Model
import { Platform } from './../../_models/platform';

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

    private fileList: FileList;

    private id: number;

    constructor(private platformService: PlatformsService, footerService: FooterService) {

        footerService.fixFooter(true);

    }

    ngOnInit() {

        this.success = true;

        this.show = false;

        this.message = 'A plataforma foi cadastrada com sucesso.';

    }

    sendImage() {



    }

    onSubmit(form){

        // console.log(form.value);

        this.platformService.registerPlatform(form.value).subscribe(

            (platform: Platform) => {

                console.log(platform);

                this.id = platform.id;

                console.log(platform.id);

                this.show = true;

                if (this.fileList) {

                    if (this.fileList.length > 0) {

                        let file: File = this.fileList[0];

                        let formData: FormData = new FormData();

                        formData.append('uploadFile', file, file.name);

                        this.platformService.registerPlatformImage(formData, this.id).subscribe(
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





            }), error => {

            console.log(error);

            this.show = true;

            this.success = false;

            this.message = 'Falha ao cadastrar a plataforma.';

        };

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
