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

    users: User[] = [];

    private id;

    constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

        this.activatedRoute.params.subscribe((params: Params) => { this.id = params['id']; });

        this.userService.getUser(this.id).subscribe(users => { this.users = users }), erro => console.log(erro);

    }

    onSubmit(form){

        console.log(form);

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