import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-platforms-register',
    templateUrl: './platforms-register.component.html',
    styleUrls: ['./platforms-register.component.css', '../styles.css' ]
})
export class PlatformsRegisterComponent{

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