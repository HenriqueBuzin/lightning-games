// Angular
import { Component, OnInit } from '@angular/core';

// Service
import { ManufactureService } from './../../_services/manufacture.service';
import { FooterService } from './../../_services/footer.service';

// Model
import { Manufacture } from './../../_models/manufacture';

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-register',
    templateUrl: './manufacture-register.component.html',
    styleUrls: ['./manufacture-register.component.css' ]
})
export class ManufacturesRegisterComponent implements OnInit {

    private fileList: FileList;

    success: boolean;

    show: boolean;

    message: string;

    constructor(private manufactureService: ManufactureService, footerService: FooterService) {

        footerService.fixFooter(true);

    }

    ngOnInit() {

        this.success = true;

        this.show = false;

        this.message = 'A fabricante foi cadastrada com sucesso.';

    }

    onSubmit(form) {

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

        /*

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

        }

        */

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