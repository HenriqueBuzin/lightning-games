import { Component } from '@angular/core';
import { ManufactureService } from '../../_services/manufacture.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-register',
    templateUrl: './manufacture-register.component.html',
    styleUrls: ['./manufacture-register.component.css' ]
})
export class ManufacturesRegisterComponent{

    private fileList: FileList;

    constructor(private manufactureService: ManufactureService, private router: Router){}

    onSubmit(form){

        if(this.fileList){

            if(this.fileList.length > 0) {

                // Funcionando

            }

        }else{

            this.manufactureService.registerManufacture(form.value).subscribe(form => {

                console.log(form);

                this.router.navigate(['/manufacture']);

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