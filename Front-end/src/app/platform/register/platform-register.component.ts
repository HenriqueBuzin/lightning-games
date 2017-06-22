import { Component } from '@angular/core';
import {Http} from "@angular/http";
import {isUndefined} from "util";

@Component({
    moduleId: module.id,
    selector: 'app-platforms-register',
    templateUrl: './platform-register.component.html',
    styleUrls: ['./platform-register.component.css' ]
})
export class PlatformsRegisterComponent{


    private fileList: FileList;

    constructor(private http: Http){}

    onSubmit(form){

        if(this.fileList){

            if(this.fileList.length > 0) {

                // Funcionando

            }


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