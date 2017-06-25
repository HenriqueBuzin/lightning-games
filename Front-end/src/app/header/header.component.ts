// Angular
import { Component, OnInit } from '@angular/core';

// Service
import { AuthService } from './../_services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    menu = false;

    constructor(private authService: AuthService){ }

    ngOnInit() {

        this.authService.menuEmitter.subscribe(show =>

            this.menu = show

        );

    }

    logout(){

        this.authService.logout();

    }

}