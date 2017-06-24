import { Component } from '@angular/core';

import {PlatformsService} from "../../_services/platform.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-platforms-register',
    templateUrl: './platform-register.component.html',
    styleUrls: ['./platform-register.component.css' ]
})
export class PlatformsRegisterComponent{

    private fileList: FileList;

    constructor(private platformService: PlatformsService, private router: Router){}

    onSubmit(form){

        if(this.fileList){

            if(this.fileList.length > 0) {

                // Funcionando

            }

        }else{

            this.platformService.registerPlatform(form.value).subscribe(form => {

                console.log(form);

                this.router.navigate(['/platform']);

            }), erro => console.log(erro);

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