import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-register',
    templateUrl: './manufactures-register.component.html',
    styleUrls: ['./manufactures-register.component.css', '../styles.css' ]
})
export class ManufacturesRegisterComponent{

    onSubmit(form){

        console.log(form);

    }

    verificaValidTouched(campo){

        return !campo.valid && campo.touched;

    }

    aplicaCssErro(campo){

        return {

            'has-error' : this.verificaValidTouched(campo) ,

            'has-feedback' : this.verificaValidTouched(campo)

        }

    }

}