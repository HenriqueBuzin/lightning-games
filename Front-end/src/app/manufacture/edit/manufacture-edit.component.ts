// Angular
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Service
import { ManufactureService } from '../../_service/manufacture.service';
import { FooterService } from '../../_service/footer.service';

// Model
import { Manufacture } from '../../_model/manufacture';

@Component({
    moduleId: module.id,
    selector: 'app-manufacture-edit',
    templateUrl: './manufacture-edit.component.html',
    styleUrls: ['./manufacture-edit.component.css' ]
})
export class ManufactureEditComponent implements OnInit {

    manufacture: Manufacture[] = [];

    success: boolean;

    show: boolean;

    message: string;

    private id: number;

    constructor(private activatedRoute: ActivatedRoute, private manufactureService: ManufactureService, footerService: FooterService) {

        footerService.fixFooter(true);

    }

    ngOnInit() {

        this.success = true;

        this.show = false;

        this.message = 'A fabricante foi editada com sucesso.';

        this.activatedRoute.params.subscribe(

            (params: Params) => {

                this.id = params['id'];

                this.manufactureService.getManufacture(this.id).subscribe(

                    (manufacture: Manufacture[]) => {

                        this.manufacture = manufacture;

                }, error => console.log(error));

        });

    }

    // Função de callback, retorna um erro ao usuário.

    callBack(error) {

        console.log(error);

        this.show = true;

        this.success = false;

        this.message = 'Falha ao editar a fabricante.';

    }

    // Função chamada após submeter o formulário

    onSubmit(form) {

        this.manufactureService.editManufacture(form.value).subscribe(

            (manufacture: Manufacture[]) => {

                console.log(manufacture);

                this.show = true;

            }, error => this.callBack(error));

    }

    // Validações

    checkValidTouched(field) {

        return !field.valid && field.touched;

    }

    applyCssError(field) {

        return {

            'textError': this.checkValidTouched(field)

        };

    }

}
