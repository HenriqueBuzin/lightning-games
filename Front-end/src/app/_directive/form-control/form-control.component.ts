// Angular
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.css' ]
})
export class FormControlComponent {

    /*
        Exibe a validação do form.
        Tem o comportamento padrão de não ser exibido e de quando for, com aparência de erro.
        O "show" é um boolean para mostrar ou não.
        O "type" é um boolean, sendo false (0) para erro (padrão) e quando ser true (1) ser sucesso.
        O "message" é um string, é a mensagem mostrada ao usuário, sendo obrigatório.
     */

    @Input() show: boolean;

    @Input() type: boolean;

    @Input() message: string;

}
