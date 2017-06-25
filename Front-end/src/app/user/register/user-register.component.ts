import {Component} from '@angular/core';
import {Response} from '@angular/http';

import { UserService } from '../../_services/user.service';

import {User} from '../../_models/user';

@Component({
    moduleId: module.id,
    selector: 'app-users-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css' ]
})
export class UsersRegisterComponent {

    success = true;

    show = false;

    message = 'O usuário foi cadastrado com sucesso.';

    private fileList: FileList;

    constructor(private userService: UserService) { }

    onSubmit(form) {

        this.userService.registerUser(form.value).subscribe(

            (user: User[]) => {

                console.log(user);

                this.show = true;

        }), (error: Response) => {

                console.log(error);

                this.show = true;

                this.success = false;

                this.message = 'Falha ao cadastrar o usuário.';

        };

        if (this.fileList){

            if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                this.userService.registerUserImage(formData).subscribe(
                    (user: User[]) => {

                    console.log(user);

                    this.show = true;

                }), (error: Response) => {

                    console.log(error);

                    this.show = true;

                    this.success = false;

                    this.message = 'Falha ao cadastrar o usuário.';

                };

            }

        }

    }

    fileChange(target) {

        this.fileList = target.files;

        console.log(this.fileList);

    }

    checkValidTouched(field){

        return !field.valid && field.touched;

    }

    applyCssError(field){

        return {

            'textError': this.checkValidTouched(field)

        }

    }

}
