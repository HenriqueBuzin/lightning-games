// Angular
import { Component, OnInit } from '@angular/core';

// Service
import { FooterService } from '../_service/footer.service';

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

    fix = false;

    constructor(private footerService: FooterService) { }

    ngOnInit() {

        this.footerService.footerEmitter.subscribe(

            (fix: boolean) => {

                this.fix = fix;

        });

    }

}
