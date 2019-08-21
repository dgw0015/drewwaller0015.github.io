import {Component, OnInit} from '@angular/core';


// @ts-ignore
@Component({
   selector: 'app-header',
   template: `
      <div class="topNav" *ngIf="getActive() === 'home'">
         <div class="nav-link-edge" id="active">
            <a [routerLink]="['/welcome']"><i class="fa fa-home"></i> Home</a>
         </div>
         <div class="nav-link">
            <a [routerLink]="['/about']" (click)="setActive('about')"><i class="fa fa-user"></i> About</a>
         </div>
         <div class="nav-link">
            <a  [routerLink]="['/contact']" (click)="setActive('contact')"><i class="fa fa-envelope"></i> Contact</a>
         </div>
      </div>

      <!-- Top navigation given the current active page is the about me page. -->
      <div class="topNav" *ngIf="getActive() === 'about'">
         <div class="nav-link-edge">
            <a [routerLink]="['/welcome']" (click)="setActive('home')"><i class="fa fa-home"></i> Home</a>
         </div>
         <div class="nav-link" id="active">
            <a [routerLink]="['/about']"><i class="fa fa-user"></i> About</a>
         </div>
         <div class="nav-link">
            <a [routerLink]="['/contact']" (click)="setActive('contact')"><i class="fa fa-envelope"></i> Contact</a>
         </div>
         <div class="nav-link">
            <a [routerLink]="['/bio']" (click)="setActive('bio')"><i class="fa fa-user-circle"></i> My Bio</a>
         </div>
      </div>
      
      <!--Top navigation given the current active page is the my bio page. -->
      <div class="topNav" *ngIf="getActive() === 'bio'">
         <div class="nav-link-edge">
            <a [routerLink]="['/welcome']" (click)="setActive('home')"><i class="fa fa-home"></i> Home</a>
         </div>
         <div class="nav-link">
            <a [routerLink]="['/about']" (click)="setActive('about')"><i class="fa fa-user"></i> About</a>
         </div>
         <div class="nav-link">
            <a [routerLink]="['/contact']" (click)="setActive('contact')"><i class="fa fa-envelope"></i> Contact</a>
         </div>
         <div class="nav-link" id="active">
            <a [routerLink]="['/bio']"><i class="fa fa-user-circle"></i> My Bio</a>
         </div>
      </div>

      <!-- Top navigation given the current active page is the contact page -->
      <div class="topNav" *ngIf="getActive() === 'contact'">
         <div class="nav-link-edge">
            <a [routerLink]="['/welcome']" (click)="setActive('home')"><i class="fa fa-home"></i> Home</a>
         </div>
         <div class="nav-link">
            <a [routerLink]="['/about']" (click)="setActive('about')"><i class="fa fa-user"></i> About</a>
         </div>
         <div class="nav-link" id="active">
            <a [routerLink]="['/contact']"><i class="fa fa-envelope"></i> Contact</a>
         </div>
      </div>
   `,
   styleUrls: ['./headerFooter.scss']
})
export class HeaderComponent implements OnInit  {
   active = 'home';
   resumePDF;

   setActive(activePg: string): void {
      this.active = activePg;
   }

   getActive(): string {
      return this.active;
   }

  constructor() {
      this.resumePDF = './assets/Drew G Waller 2019 Resume.pdf'
   }

   ngOnInit(): void {
   }
}
