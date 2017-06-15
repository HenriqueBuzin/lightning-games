import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-manufacture-edit',
    templateUrl: './manufacture-edit.component.html',
    styleUrls: ['./manufacture-edit.component.css', '../styles.css' ]
})
export class ManufactureEditComponent implements OnInit {

    manufacture: any = {

        name: null,

        imageFullPath: null

    }

    private id;

    constructor(private http: Http, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

        this.activatedRoute.params.subscribe((params: Params) => {

            this.id = params['id'];

            console.log(this.id);

        });

        this.http.get('http://localhost:8080/lightning/api/manufacture/' + this.id)
            .map(res => res.json()).subscribe(manufacture => {

            this.manufacture.name = manufacture.name;

            this.manufacture.imageFullPath = manufacture.imageFullPath;

            console.log(this.manufacture);

        }), erro => console.log(erro);

    }

    onSubmit(form){

        console.log(form);


    }

    verificaValidTouched(campo){

        return !campo.valid && campo.touched;

    }

}