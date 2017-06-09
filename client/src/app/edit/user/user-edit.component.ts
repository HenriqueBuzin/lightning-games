import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css' ]
})
export class UserEditComponent implements OnInit {

    user: any = {

        name: null,

        email: null,

        password: null,

        registrationDate: null,

        image: null,

        imageFullPath: null

    }

    private id;

    constructor(private http: Http, private activatedRoute: ActivatedRoute) {

        http.get('http://localhost:8080/lightning/api/user/' + this.id)
            .map(res => res.json()).subscribe(user => {

            this.user.name = user.name;

            this.user.email = user.email;

            this.user.password = user.password;

            this.user.registrationDate = user.registrationDate;

            this.user.image = user.image;

            this.user.imageFullPath = user.imageFullPath;

            console.log(this.user);

        }), erro => console.log(erro);

    }

    ngOnInit() {

        this.activatedRoute.params.subscribe((params: Params) => {

            this.id = params['id'];

            console.log(this.id);

        });

    }

}