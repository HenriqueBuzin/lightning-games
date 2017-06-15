import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css', '../styles.css' ]
})
export class UserEditComponent implements OnInit {

    user: any = {

        name: null,

        email: null,

        registrationDate: null,

        imageFullPath: null

    }

    private id;

    constructor(private http: Http, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

        this.activatedRoute.params.subscribe((params: Params) => {

            this.id = params['id'];

            console.log(this.id);

        });

        this.http.get('http://localhost:8080/lightning/api/user/' + this.id)
            .map(res => res.json()).subscribe(user => {

            this.user.name = user.name;

            this.user.email = user.email;

            this.user.registrationDate = user.registrationDate;

            this.user.imageFullPath = user.imageFullPath;

            console.log(this.user);

        }), erro => console.log(erro);

    }

    onSubmit(form){

        console.log(form);


    }

    verificaValidTouched(campo){

        return !campo.valid && campo.touched;

    }

}