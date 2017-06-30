// Angular
import { Component } from '@angular/core';

// Services
import { FooterService } from '../_service/footer.service';
import { AuthService } from '../_service/auth.service';

// Model
import { User } from '../_model/user';

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

    onSubmit() {

        this.authService.login(this.user);

        this.authService.alertEmitter.subscribe(show =>

            this.alert = show

        );

    }

    checkValidTouched(field) {

        return !field.valid && field.touched;

    }

    applyCssErrorLabel(field) {

        return {

            'textError': this.checkValidTouched(field)

        };

    }

}
