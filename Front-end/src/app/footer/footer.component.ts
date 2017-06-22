import { Component, OnInit } from '@angular/core';

import { AuthService } from "../_services/auth.service";

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    footer: boolean = false;

    constructor(private authService: AuthService){ }

    ngOnInit(){

        this.authService.footerEmitter.subscribe(show =>

            this.footer = show

        );

    }

}