import { Component } from '@angular/core';

import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent{

    private user: User = new User();

    constructor(private authService: AuthService){ }

    login(){

        this.authService.login(this.user);

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