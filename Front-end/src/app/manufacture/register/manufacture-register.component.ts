import { Component } from '@angular/core';
import {ManufactureService} from "../../_services/manufacture.service";

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-register',
    templateUrl: './manufacture-register.component.html',
    styleUrls: ['./manufacture-register.component.css' ]
})
export class ManufacturesRegisterComponent{

    private fileList: FileList;

    constructor(private manufactureService: ManufactureService){}

    onSubmit(form){

        if(this.fileList){

            if(this.fileList.length > 0) {

                // Funcionando

            }

        }else{

            this.manufactureService.registerManufacture(form.value).subscribe(form => {

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