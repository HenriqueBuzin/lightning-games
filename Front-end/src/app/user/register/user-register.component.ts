// Angular
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

// Service
import { FooterService } from './../../_services/footer.service';
import { UserService } from './../../_services/user.service';

// Model
import { User } from './../../_models/user';

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

    private fileList: FileList;

    constructor(private userService: UserService, footerService: FooterService) {

        footerService.fixFooter(false);

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

        this.message = 'Falha ao cadastrar o usuário.'



    }

    // Realiza o envio da imagem

    uploadImage(id) {

         if (this.fileList){

             if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                console.log(this.fileList[0]);

                this.userService.registerUserImage(formData, id).subscribe(

                     (user: User[]) => {

                        console.log(user);

                        this.show = true;

                }), error => this.callBack(error);

             } else {

                 this.callBack('Validação menor ou igual a 0');

             }

         } else {

             this.callBack('Validação imagem retornou null');

         }

    }

    // Função chamda ao subemter o formulário

    onSubmit(form) {

        this.userService.registerUser(form.value).subscribe(

            (user: User[]) => {

                console.log(user);

                this.show = true;

                // this.uploadImage(1);

        }), error => this.callBack(error);

    }

    // Adiciona globalmente a imagem para o formulário ser submetido como único

    fileChange(target) {

        this.fileList = target.files;

        console.log(this.fileList);

    }

    // Validações

    checkValidTouched(field){

        return !field.valid && field.touched;

    }

    applyCssError(field){

        return {

            'textError': this.checkValidTouched(field)

        }

    }

}
