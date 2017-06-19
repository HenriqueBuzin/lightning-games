import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.css' ]
})
export class FormControlComponent {

    @Input() msgErro: string;

    @Input() mostrarErro: boolean;

}