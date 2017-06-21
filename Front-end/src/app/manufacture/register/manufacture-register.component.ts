import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-register',
    templateUrl: './manufacture-register.component.html',
    styleUrls: ['./manufacture-register.component.css' ]
})
export class ManufacturesRegisterComponent{

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