// Angular
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

// Service
import { FooterService } from './../../_services/footer.service';
import { UserService } from './../../_services/user.service';

// Model
import { User } from './../../_models/user';

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

    private fileList: FileList;

    constructor(private activatedRoute: ActivatedRoute, private userService: UserService, footerService: FooterService) {

        footerService.fixFooter(false);

    }

    ngOnInit() {

        this.success = true;

        this.show = false;

        this.message = 'O usuário foi cadastrado com sucesso.';

        this.activatedRoute.params.subscribe((params: Params) => {

            this.id = params['id'];

            this.userService.getUser(this.id).subscribe(

                (user: User[]) => {

                    this.user = user;

                }), (error: Response) => {

                    console.log(error);

            };

        });

    }

    onSubmit(form) {

        console.log(JSON.stringify(form.value));

        this.userService.editUser(form.value).subscribe(

            (user: User[]) => {

                console.log(user);

                this.show = true;

            }), (error: Response) => {

                console.log(error);

                this.show = true;

                this.success = false;

                this.message = 'Falha ao cadastrar o usuário.';

        };

        if (this.fileList) {

            if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                this.userService.editUserImage(formData, this.id).subscribe(

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

    checkValidTouched(field) {

        return (!field.valid && field.touched);

    }

    applyCssError(field) {

        return {

            'textError': this.checkValidTouched(field)

        };

    }

    resetPassword() {

        this.userService.resetPassword(this.id).subscribe(

            (user: User[]) => {

                console.log(user);

            }), (error: Response) => console.log(error);

    }

}
