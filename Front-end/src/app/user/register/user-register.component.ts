import { Component } from '@angular/core';

import {UserService} from "../../_services/user.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-users-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css' ]
})
export class UsersRegisterComponent{

    private fileList: FileList;

    constructor(private userService: UserService, private router: Router){}

    onSubmit(form){

        if(this.fileList){

            if(this.fileList.length > 0) {

                // Funcionando

            }

        }else{

            this.userService.registerUser(form.value).subscribe(form => {

                console.log(form);

                this.router.navigate(['/user']);

            }), erro => console.log(erro);

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