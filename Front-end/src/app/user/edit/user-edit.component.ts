// Angular
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

// Service
import { FooterService } from '../../_service/footer.service';
import { UserService } from '../../_service/user.service';

// Model
import { User } from '../../_model/user';

@Component({
    moduleId: module.id,
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css' ]
})
export class UserEditComponent implements OnInit {

    user: User[] = [];

    success: boolean;

    show: boolean;

    message: string;

    private id: number;

    constructor(private activatedRoute: ActivatedRoute, private userService: UserService, footerService: FooterService) {

        footerService.fixFooter(true);

    }

    ngOnInit() {

        this.success = true;

        this.show = false;

        this.message = 'O usuário foi editado com sucesso.';

        this.activatedRoute.params.subscribe((params: Params) => {

            this.id = params['id'];

            this.userService.getUser(this.id).subscribe(

                (user: User[]) => {

                    this.user = user;

                }, (error: Response) => {

                    console.log(error);

            });

        });

    }

    // Função de callback, retorna erro ao usuário

    callBack(error: any) {

        console.log(error);

        this.show = true;

        this.success = false;

        this.message = 'Falha ao cadastrar o usuário.';

    }

    // Função chamada ao submeter o formulário

    onSubmit(form) {

        console.log(JSON.stringify(form.value));

        this.userService.editUser(form.value).subscribe(

            (user: User[]) => {

                console.log(user);

                this.show = true;

            }, error => this.callBack(error));

    }

    // Validações

    checkValidTouched(field) {

        return (!field.valid && field.touched);

    }

    applyCssError(field) {

        return {

            'textError': this.checkValidTouched(field)

        };

    }

    // Função chamada ao clicar no botão resetar senha, ela faz a requisição e coloca a senha como 1234

    resetPassword() {

        this.userService.resetPassword(this.id).subscribe(

            (user: User[]) => {

                console.log(user);

        }, (error: Response) => console.log(error));

    }

}
