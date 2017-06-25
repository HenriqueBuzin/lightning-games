import { Component } from '@angular/core';

import { AuthService } from './../_services/auth.service';
import { User } from './../_models/user';
import {FooterService} from './../_services/footer.service';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent {

    private user: User = new User();

    alert = false;

    constructor(private authService: AuthService, footerService: FooterService) {

        footerService.fixFooter(true);

    }

    onSubmit(){

        this.authService.login(this.user);

        this.authService.alertEmitter.subscribe(show =>

            this.alert = show

        );

    }

    checkValidTouched(field){

        return !field.valid && field.touched;

    }

    applyCssErrorLabel(field){

        return {

            'textError': this.checkValidTouched(field)

        }

    }

}