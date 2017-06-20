import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent{

    userName: string = localStorage.getItem('userName');

}