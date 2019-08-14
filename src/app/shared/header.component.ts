import {Component, OnInit} from '@angular/core';


// @ts-ignore
@Component({
   selector: 'app-header',
   template: `
      <div class="topNav" *ngIf="getActive() === 'home'">
         <div class="nav-link-edge" id="active">
            <a [routerLink]="['/welcome']">Home</a>
         </div>
         <div class="nav-link">
            <a [routerLink]="['/about']" (click)="setActive('about')">About</a>
         </div>
         <div class="nav-link">
            <a  [routerLink]="['/contact']" (click)="setActive('contact')">Contact</a>
         </div>
      </div>

      <!-- Top navigation given the current active page is the contact me page. -->
      <div class="topNav" *ngIf="getActive() === 'about'">
         <div class="nav-link-edge">
            <a [routerLink]="['/welcome']" (click)="setActive('home')">Home</a>
         </div>
         <div class="nav-link" id="active">
            <a [routerLink]="['/about']">About</a>
         </div>
         <div class="nav-link">
            <a [routerLink]="['/contact']" (click)="setActive('contact')">Contact</a>
         </div>
      </div>

      <!-- Top navigation given the current active page is the home page -->
      <div class="topNav" *ngIf="getActive() === 'contact'">
         <div class="nav-link-edge">
            <a [routerLink]="['/welcome']" (click)="setActive('home')">Home</a>
         </div>
         <div class="nav-link">
            <a [routerLink]="['/about']" (click)="setActive('about')">About</a>
         </div>
         <div class="nav-link" id="active">
            <a [routerLink]="['/contact']">Contact</a>
         </div>
      </div>
   `,
   styleUrls: ['./headerFooter.scss']
})
export class HeaderComponent implements OnInit  {
   active = 'home';

   setActive(activePg: string): void {
      this.active = activePg;
   }

   getActive(): string {
      return this.active;
   }

  constructor()   {}

   ngOnInit(): void {
   }
}
