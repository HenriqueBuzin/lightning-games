import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ManufactureService } from '../../_services/manufacture.service';
import { Manufacture } from '../../_models/manufacture';

@Component({
    moduleId: module.id,
    selector: 'app-manufacture-edit',
    templateUrl: './manufacture-edit.component.html',
    styleUrls: ['./manufacture-edit.component.css' ]
})
export class ManufactureEditComponent {

    manufactures: Manufacture[] = [];

    success = true;

    show = false;

    message = 'A fabricante foi cadastrada com sucesso.';

    private fileList: FileList;

    constructor(private activatedRoute: ActivatedRoute, private manufactureService: ManufactureService) {

        this.activatedRoute.params.subscribe(

            (params: Params) => {

                let id: number = params['id'];

                this.manufactureService.getManufacture(id).subscribe(

                    (manufactures: Manufacture[]) => {

                        this.manufactures = manufactures;

                }), erro => console.log(erro);

            });

    }

    onSubmit(form) {

        if (this.fileList) {

            if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                this.manufactureService.editManufactureImage(formData).subscribe(

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

            this.manufactureService.editManufacture(form.value).subscribe(

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

        return !field.valid && field.touched;

    }

    applyCssError(field){

        return {

            'textError': this.checkValidTouched(field)

        }

    }

}