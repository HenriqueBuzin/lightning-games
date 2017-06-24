import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';

import { PlatformsService } from '../../_services/platform.service';
import { Platform } from '../../_models/platform';

@Component({
    moduleId: module.id,
    selector: 'app-platform-edit',
    templateUrl: './platform-edit.component.html',
    styleUrls: ['./platform-edit.component.css' ]
})
export class PlatformEditComponent {

    platforms: Platform[] = [];

    private fileList: FileList;

    constructor(private activatedRoute: ActivatedRoute, private platformService: PlatformsService) {

        this.activatedRoute.params.subscribe(
            (params: Params) => {
                let id: number = params['id'];
                this.platformService.getPlatform(id).subscribe(
                    (platforms: Platform[]) => {
                        this.platforms = platforms;
                }), erro => console.log(erro);
        });

    }

    onSubmit(form){

        console.log(form);

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