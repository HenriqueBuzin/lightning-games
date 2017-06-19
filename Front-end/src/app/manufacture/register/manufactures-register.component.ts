import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-register',
    templateUrl: './manufactures-register.component.html',
    styleUrls: ['./manufactures-register.component.css' ]
})
export class ManufacturesRegisterComponent{

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