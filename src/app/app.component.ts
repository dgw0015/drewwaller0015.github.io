import {Component} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  template: `
      <!-- header Component -->
      <app-header></app-header>
     <router-outlet></router-outlet>
     <app-footer></app-footer>
  `
})
// @ts-ignore
export class AppComponent { }

