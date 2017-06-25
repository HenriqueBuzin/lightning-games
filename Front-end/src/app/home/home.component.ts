import { Component } from '@angular/core';

import {FooterService} from './../_services/footer.service';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent{

    userName: string = localStorage.getItem('userName');

    constructor(footerService: FooterService) {

        footerService.fixFooter(false);

    }

}