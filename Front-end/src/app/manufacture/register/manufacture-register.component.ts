// Angular
import { Component, OnInit } from '@angular/core';

// Service
import { ManufactureService } from '../../_service/manufacture.service';
import { FooterService } from '../../_service/footer.service';

// Model
import { Manufacture } from '../../_model/manufacture';

@Component({
    moduleId: module.id,
    selector: 'app-manufactures-register',
    templateUrl: './manufacture-register.component.html',
    styleUrls: ['./manufacture-register.component.css' ]
})
export class ManufacturesRegisterComponent implements OnInit {

    success: boolean;

    show: boolean;

    message: string;

    constructor(private manufactureService: ManufactureService, footerService: FooterService) {

        footerService.fixFooter(true);

    }

    ngOnInit() {

        this.success = true;

        this.show = false;

        this.message = 'A fabricante foi cadastrada com sucesso.';

    }

    // Função de callBack, retorna um aviso de erro ao usuário.

    callBack(error) {

        console.log(error);

        this.show = true;

        this.success = false;

        this.message = 'Falha ao cadastrar a fabricante.';

    }

    // Função chamada ao formulário ser submetido.

    onSubmit(form) {

        this.manufactureService.registerManufacture(form.value).subscribe(

            (manufacture: Manufacture[]) => {

                console.log(manufacture);

                this.show = true;

            }, error => this.callBack(error));

    }

    // Validações

    checkValidTouched(field) {

        return (!field.valid && field.touched);

    }

    applyCssError(field) {

        return {

            'textError': this.checkValidTouched(field)

        };

    }

}
