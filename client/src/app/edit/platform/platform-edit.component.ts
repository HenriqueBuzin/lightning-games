import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-platform-edit',
    templateUrl: './platform-edit.component.html',
    styleUrls: ['./platform-edit.component.css' ]
})
export class PlatformEditComponent implements OnInit {

    platform: any = {

        name: null,

        image: null,

        imageFullPath: null

    }

    private id;

    constructor(private http: Http, private activatedRoute: ActivatedRoute) {

        http.get('http://localhost:8080/lightning/api/platform/' + this.id)
            .map(res => res.json()).subscribe(platform => {

            this.platform.name = platform.name;

            this.platform.image = platform.image;

            this.platform.imageFullPath = platform.imageFullPath;

            console.log(this.platform);

        }), erro => console.log(erro);


    }

    ngOnInit() {

        this.activatedRoute.params.subscribe((params: Params) => {

            this.id = params['id'];

            console.log(this.id);

        });

    }

}