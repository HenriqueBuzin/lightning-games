// Angular
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Service
import { PlatformsService } from './../../_services/platform.service';
import { FooterService } from './../../_services/footer.service';

// Model
import { Platform } from './../../_models/platform';

@Component({
    moduleId: module.id,
    selector: 'app-platform-edit',
    templateUrl: './platform-edit.component.html',
    styleUrls: ['./platform-edit.component.css' ]
})
export class PlatformEditComponent implements OnInit {

    platforms: Platform[] = [];

    success = true;

    show = false;

    message = 'A plataforma foi cadastrada com sucesso.';

    private fileList: FileList;

    constructor(private activatedRoute: ActivatedRoute, private platformService: PlatformsService, footerService: FooterService) {

        footerService.fixFooter(false);

    }

    ngOnInit() {

        this.activatedRoute.params.subscribe(

            (params: Params) => {

                let id: number = params['id'];

                this.platformService.getPlatform(id).subscribe(

                    (platforms: Platform[]) => {

                        this.platforms = platforms;

                }), error => console.log(error);

        });

    }

    onSubmit(form) {

        this.platformService.editPlatform(form.value).subscribe(

            (platform: Platform[]) => {

                console.log(platform);

                this.show = true;

            }), error => {

            console.log(error);

            this.show = true;

            this.success = false;

            this.message = 'Falha ao cadastrar a plataforma.';

        };

        if (this.fileList){

            if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                this.platformService.editPlatformImage(formData).subscribe(

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