// Angular
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

// Service
import { FooterService } from '../../_service/footer.service';
import { UserService } from '../../_service/user.service';

// Model
import { User } from '../../_model/user';

@Component({
    moduleId: module.id,
    selector: 'app-users-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css' ]
})
export class UsersRegisterComponent implements OnInit {

    success: boolean;

    show: boolean;

    message: string;

    constructor(private userService: UserService, footerService: FooterService) {

        footerService.fixFooter(true);

    }

    ngOnInit() {

        this.success = true;

        this.show = false;

        this.message = 'O usuário foi cadastrado com sucesso.';

    }

    // Função de callback, retorna erro ao usuário

    callBack(error) {

        console.log(error);

        this.show = true;

        this.success = false;

        this.message = 'Falha ao cadastrar o usuário.';

    }

    // Função chamda ao subemter o formulário

    onSubmit(form) {

        this.userService.registerUser(form.value).subscribe(

            (user: User[]) => {

                console.log(user);

                this.show = true;

                // this.uploadImage(1);

        }, error => this.callBack(error));

    }

    // Validações

    whiteSpaceValidator(field) {

        let flag: boolean;

        if ((field.value || '').trim().length === 0) {

            flag =  true;

        } else {

            flag =  false;

        }

        return flag;

    }

    checkValidTouched(field) {

        return (!field.valid && field.touched);

    }

    applyCssError(field) {

        return {

            'textError': this.checkValidTouched(field)

        };

    }

}
