// Angular
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Service
import { ManufactureService } from './../../_services/manufacture.service';
import { FooterService } from './../../_services/footer.service';

// Model
import { Manufacture } from './../../_models/manufacture';

@Component({
    moduleId: module.id,
    selector: 'app-manufacture-edit',
    templateUrl: './manufacture-edit.component.html',
    styleUrls: ['./manufacture-edit.component.css' ]
})
export class ManufactureEditComponent implements OnInit {

    manufactures: Manufacture[] = [];

    success: boolean;

    show: boolean;

    message: string;

    private id: number;

    private fileList: FileList;

    constructor(private activatedRoute: ActivatedRoute, private manufactureService: ManufactureService, footerService: FooterService) {

        footerService.fixFooter(false);

    }

    ngOnInit() {

        this.success = true;

        this.show = false;

        this.message = 'A fabricante foi editada com sucesso.';

        this.activatedRoute.params.subscribe(

            (params: Params) => {

                this.id = params['id'];

                this.manufactureService.getManufacture(this.id).subscribe(

                    (manufactures: Manufacture[]) => {

                        this.manufactures = manufactures;

                }), erro => console.log(erro);

        });

    }

    // Função de callback, retorna um erro ao usuário.

    callBack(error) {

        console.log(error);

        this.show = true;

        this.success = false;

        this.message = 'Falha ao editar a fabricante.';

    }

    // Função para upload de imagem

    uploadImage(id) {

        if (this.fileList) {

            if (this.fileList.length > 0) {

                let file: File = this.fileList[0];

                let formData: FormData = new FormData();

                formData.append('uploadFile', file, file.name);

                this.manufactureService.editManufactureImage(formData, id).subscribe(

                    (manufacture: Manufacture[]) => {

                        console.log(manufacture);

                        this.show = true;

                    }), error => this.callBack(error);

            } else {

                this.callBack('Validação menor ou igual a 0');

            }

        } else {

            this.callBack('Validação imagem retornou null');

        }

    }

    // Função chamada após submeter o formulário

    onSubmit(form) {

        this.manufactureService.editManufacture(form.value).subscribe(

            (manufacture: Manufacture[]) => {

                console.log(manufacture);

                this.show = true;

                /*

                     if (this.fileList) {

                        this.uploadImage(1);

                     }else{

                         this.show = true;

                     }

                 */

            }), error => this.callBack(error);

    }

    // Função que adiciona a imagem na variável global, para que o formulário seja submetido como único.

    fileChange(target) {

        this.fileList = target.files;

        console.log(this.fileList);

    }

    // Validações

    checkValidTouched(field){

        return !field.valid && field.touched;

    }

    applyCssError(field){

        return {

            'textError': this.checkValidTouched(field)

        }

    }

}