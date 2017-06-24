import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ManufactureService } from '../../_services/manufacture.service';
import { Manufacture } from '../../_models/manufacture';

@Component({
    moduleId: module.id,
    selector: 'app-manufacture-edit',
    templateUrl: './manufacture-edit.component.html',
    styleUrls: ['./manufacture-edit.component.css' ]
})
export class ManufactureEditComponent {

    manufactures: Manufacture[] = [];

    constructor(private activatedRoute: ActivatedRoute, private manufactureService: ManufactureService) {

        this.activatedRoute.params.subscribe(
            (params: Params) => {
                let id: number = params['id'];
                this.manufactureService.getManufacture(id).subscribe(
                    (manufactures: Manufacture[]) => {
                        this.manufactures = manufactures;
                }), erro => console.log(erro);
            });

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