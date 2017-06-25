import { Component } from '@angular/core';

import { ManufactureService } from '../../_services/manufacture.service';

import { Manufacture } from './../../_models/manufacture';

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-register',
    templateUrl: './manufacture-register.component.html',
    styleUrls: ['./manufacture-register.component.css' ]
})
export class ManufacturesRegisterComponent{

    private fileList: FileList;

    success = true;

    show = false;

    message = 'A fabricante foi cadastrada com sucesso.';

    constructor(private manufactureService: ManufactureService) { }

    onSubmit(form) {

        if (this.fileList) {

            if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                this.manufactureService.registerManufactureImage(formData).subscribe(

                    (manufacture: Manufacture[]) => {

                        console.log(manufacture);

                        this.show = true;

                    }), error => {

                    console.log(error);

                    this.show = true;

                    this.success = false;

                    this.message = 'Falha ao cadastrar a fabricante.';

                };

            }

        }else{

            this.manufactureService.registerManufacture(form.value).subscribe(

                (manufacture: Manufacture[]) => {

                    console.log(manufacture);

                    this.show = true;

                }), error => {

                console.log(error);

                this.show = true;

                this.success = false;

                this.message = 'Falha ao cadastrar a fabricante.';

            };

        }

    }

    fileChange(target) {

        this.fileList = target.files;

        console.log(this.fileList);

    }

    checkValidTouched(field){

        return (!field.valid && field.touched);

    }

    applyCssError(field){

        return {

            'textError': this.checkValidTouched(field)

        }

    }

}