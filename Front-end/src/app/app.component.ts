import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {

    this.router.navigate(['/inicio']);

  }

}