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

    success: boolean;

    show: boolean;

    message: string;

    private id: number;

    private fileList: FileList;

    private fileName: string;

    constructor(private activatedRoute: ActivatedRoute, private platformService: PlatformsService, footerService: FooterService) {

        footerService.fixFooter(false);

    }

    ngOnInit() {

        this.success = true;

        this.show = false;

        this.message = 'A plataforma foi editada com sucesso.';

        this.activatedRoute.params.subscribe(

            (params: Params) => {

                this.id = params['id'];

                this.platformService.getPlatform(this.id).subscribe(

                    (platforms: Platform[]) => {

                        this.platforms = platforms;

                        console.log(platforms);

                }), error => console.log(error);

        });

    }

    onSubmit(form) {

        console.log(JSON.stringify(form.value));

        this.platformService.editPlatform(form.value).subscribe(

            (platform: Platform[]) => {

                console.log(platform);

                this.show = true;

            }), error => {

            console.log(error);

            this.show = true;

            this.success = false;

            this.message = 'Falha ao editar a plataforma.';

        };

        if (this.fileList){

            if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                this.fileName = file.name;

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                this.platformService.editPlatformImage(formData, this.id).subscribe(

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