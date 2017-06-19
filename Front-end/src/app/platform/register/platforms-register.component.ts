import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-platforms-register',
    templateUrl: './platforms-register.component.html',
    styleUrls: ['./platforms-register.component.css' ]
})
export class PlatformsRegisterComponent{

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