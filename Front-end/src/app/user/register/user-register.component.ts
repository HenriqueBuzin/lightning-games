import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-users-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css' ]
})
export class UsersRegisterComponent{

    onSubmit(form){

        console.log(form);

    }

    checkValidTouched(campo){

        return !campo.valid && campo.touched;

    }

    appliesCssErrorLabel(campo){

        return {

            'textError': this.checkValidTouched(campo)

        }

    }

    onSubmitPassword(form){

        console.log(form);

    }

}