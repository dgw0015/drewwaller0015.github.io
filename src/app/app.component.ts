import {Component} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  template: `
      <!-- header Component -->
      <app-header></app-header>
     <router-outlet></router-outlet>
  `
})
// @ts-ignore
export class AppComponent { }

