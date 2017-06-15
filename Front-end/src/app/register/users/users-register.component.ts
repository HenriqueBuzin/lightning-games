import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-users-register',
    templateUrl: './users-register.component.html',
    styleUrls: ['./users-register.component.css', '../styles.css' ]
})
export class UsersRegisterComponent{

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