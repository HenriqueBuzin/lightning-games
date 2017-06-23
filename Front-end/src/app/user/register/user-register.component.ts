import { Component } from '@angular/core';

import {UserService} from "../../_services/user.service";

@Component({
    moduleId: module.id,
    selector: 'app-users-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css' ]
})
export class UsersRegisterComponent{

    private fileList: FileList;

    constructor(private userService: UserService){}

    onSubmit(form){

        if(this.fileList){

            if(this.fileList.length > 0) {

                // Funcionando

            }

        }else{

            this.userService.registerUser(form.value).subscribe(form => {

                console.log(form);

            }), erro => console.log(erro);

        }

    }

    fileChange(event) {

        this.fileList = event.target.files;

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