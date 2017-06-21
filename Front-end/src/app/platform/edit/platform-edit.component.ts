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

    private id;

    constructor(private activatedRoute: ActivatedRoute, private platformService: PlatformsService) {

        this.activatedRoute.params.subscribe((params: Params) => { this.id = params['id']; });

        this.platformService.getPlatform(this.id).subscribe(platforms => { this.platforms = platforms; }), erro => console.log(erro);

    }

    onSubmit(form){

        console.log(form);

    }

    checkValidTouched(field){

        return !field.valid && field.touched;

    }

    applyCssErrorLabel(field){

        return {

            'textError': this.checkValidTouched(field)

        }

    }

}