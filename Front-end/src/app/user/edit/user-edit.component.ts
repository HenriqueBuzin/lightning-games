import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';

import { UserEditService } from '../../_services/user/edit/user-edit.service';
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

    constructor(private activatedRoute: ActivatedRoute, private userEditService: UserEditService) {

        this.activatedRoute.params.subscribe((params: Params) => { this.id = params['id']; });

        this.userEditService.getUser(this.id).subscribe(users => { this.users = users }), erro => console.log(erro);

    }

    onSubmit(form){

        console.log(form);

    }

    verificaValidTouched(campo){

        return !campo.valid && campo.touched;

    }

    aplicaCssErroLabel(campo){

        return {

            'textError': this.verificaValidTouched(campo)

        }

    }

}