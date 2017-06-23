import { Component } from '@angular/core';

import {PlatformsService} from "../../_services/platform.service";

@Component({
    moduleId: module.id,
    selector: 'app-platforms-register',
    templateUrl: './platform-register.component.html',
    styleUrls: ['./platform-register.component.css' ]
})
export class PlatformsRegisterComponent{

    private fileList: FileList;

    constructor(private platformService: PlatformsService){}

    onSubmit(form){

        if(this.fileList){

            if(this.fileList.length > 0) {

                // Funcionando

            }

        }else{

            this.platformService.registerPlatform(form.value).subscribe(form => {

                console.log(form);

            }), erro => console.log(erro);

        }

    }

    fileChange(event) {

        this.fileList = event.target.files;

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