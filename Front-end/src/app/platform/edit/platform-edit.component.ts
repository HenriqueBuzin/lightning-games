import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';

import { PlatformEditService } from '../../_services/platform/edit/platform-edit.service';
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

    constructor(private activatedRoute: ActivatedRoute, private platformEditService: PlatformEditService) {

        this.activatedRoute.params.subscribe((params: Params) => { this.id = params['id']; });

        this.platformEditService.getPlatforms(this.id).subscribe(platforms => { this.platforms = platforms; }), erro => console.log(erro);

    }

    onSubmit(form){

        console.log(form);

    }

    verificaValidTouched(campo){

        return !campo.valid && campo.touched;

    }

    aplicaCssErroLabel(campo){

        return {

            'textError': this.verificaValidTouched(campo)

        }

    }

}