import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';

import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';

@Component({
    moduleId: module.id,
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css' ]
})
export class UserEditComponent {

    user: User[] = [];

    private id: number;

    private fileList: FileList;

    constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.userService.getUser(this.id).subscribe(
                (user: User[]) => {
                    this.user = user;
                }), erro => console.log(erro);
        });

    }

    onSubmit(form){

        if(this.fileList){

            if(this.fileList.length > 0) {

                // Funcionando

            }

        }else{

            /*

            this.userService.registerUser(form.value).subscribe(form => {

                console.log(form);


            }), erro => console.log(erro);

            */

        }

    }

    fileChange(target) {

        this.fileList = target.files;

        console.log(this.fileList);

    }

    checkValidTouched(field){

        return (!field.valid && field.touched);

    }

    applyCssError(field){

        return {

            'textError': this.checkValidTouched(field)

        };

    }

    resetPassword(){

        this.userService.resetPassword(this.id).subscribe(), erro => console.log(erro);

    }

}