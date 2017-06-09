import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-games-register',
    templateUrl: './games-register.component.html',
    styleUrls: ['./games-register.component.css', '../styles.css' ]
})
export class GamesRegisterComponent {

    platforms: Object[] = [];

    constructor(private http: Http){

        http.get('http://localhost:8080/lightning/api/platform')
            .map(res => res.json()).subscribe(platforms => {

            this.platforms = platforms;

            console.log(this.platforms);

        }), erro => console.log(erro);

    }

    onSubmit(form){

        console.log(form);


    }

    verificaValidTouched(campo){

        return !campo.valid && campo.touched;

    }

    aplicaCssErro(campo){

        return {

            'has-error' : this.verificaValidTouched(campo) ,

            'has-feedback' : this.verificaValidTouched(campo)

        }

    }

}