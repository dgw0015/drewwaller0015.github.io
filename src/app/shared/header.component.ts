import { Component, OnInit } from '@angular/core';


// @ts-ignore
@Component({
   selector: 'app-header',
   template: `       
      <!--Screen when the Home page is the active page.-->
      <div class="nav-links" *ngIf="getActive() === 'home'">
         <a class="nav-link" id="active" [routerLink]="['/welcome']">Home
         </a>
         <a class="nav-link" target="_self"
            [routerLink]="['/about']" (click)="setActive('about')">About
         </a>
         <a class="nav-link" target="_self" 
            [routerLink]="['/education']" (click)="setActive('education')">Education
           </a>
         <a class="nav-link" target="_self"
            [routerLink]="['/experience']" (click)="setActive('experience')">Experience
         </a>
         <a class="nav-link" target="_self"
            [routerLink]="['./skills']" (click)="setActive('skills')">Skills
         </a>
         <a class="nav-link" target="_self"
            [routerLink]="['/contact']" (click)="setActive('contact')">Contact
         </a>
      </div>

      <!--Screen when the About page is the active page.-->
      <div class="nav-links" *ngIf="getActive() === 'about'">
         <a class="nav-link" [routerLink]="['/welcome']" (click)="setActive('home')">Home
         </a>
            
         <a class="nav-link" id="active" [routerLink]="['/about']">About
         </a>

         <a class="nav-link" [routerLink]="['/education']" (click)="setActive('education')">Education
         </a>
            
         <a class="nav-link" [routerLink]="['/experience']" (click)="setActive('experience')">Experience
         </a>
            
         <a class="nav-link" [routerLink]="['./skills']" (click)="setActive('skills')">Skills
         </a>
            
         <a class="nav-link" [routerLink]="['/contact']" (click)="setActive('contact')">Contact
         </a>
      </div>
         
      <!--Screen when the Education page is the active page.-->
      <div class="nav-links" *ngIf="getActive() === 'education'">
         <a class="nav-link" [routerLink]="['/welcome']" (click)="setActive('home')">Home
         </a>

         <a class="nav-link" [routerLink]="['/about']" (click)="setActive('about')">About
         </a>

         <a class="nav-link" id="active" [routerLink]="['/education']">Education
         </a>

         <a class="nav-link" [routerLink]="['/experience']" (click)="setActive('experience')">Experience
         </a>

         <a class="nav-link" [routerLink]="['./skills']" (click)="setActive('skills')">Skills
         </a>

         <a class="nav-link" [routerLink]="['/contact']" (click)="setActive('contact')">Contact
         </a>
      </div>

      <!--Screen when the Experience page is the active page.-->
      <div class="nav-links" *ngIf="getActive() === 'experience'">
         <a class="nav-link" [routerLink]="['/welcome']" (click)="setActive('home')">Home
         </a>
            
         <a class="nav-link" [routerLink]="['/about']" (click)="setActive('about')">About
         </a>

         <a class="nav-link" [routerLink]="['/education']" (click)="setActive('education')">Education
         </a>
            
         <a class="nav-link" id="active" [routerLink]="['/experience']">Experience
         </a>
            
         <a class="nav-link" [routerLink]="['./skills']" (click)="setActive('skills')">Skills
         </a>
            
         <a class="nav-link" [routerLink]="['/contact']" (click)="setActive('contact')">Contact
         </a>
      </div>

      <!--Screen when the Skills page is the active page.-->
      <div class="nav-links" *ngIf="getActive() === 'skills'">
         <a class="nav-link" [routerLink]="['/welcome']" (click)="setActive('home')">Home
         </a>
            
         <a class="nav-link" [routerLink]="['/about']" (click)="setActive('about')">About
         </a>

         <a class="nav-link" [routerLink]="['/education']" (click)="setActive('education')">Education
         </a>
         
         <a class="nav-link" [routerLink]="['/experience']" (click)="setActive('experience')">Experience
         </a>
         
         <a class="nav-link" id="active" [routerLink]="['./skills']">Skills
         </a>
            
         <a class="nav-link" [routerLink]="['/contact']" (click)="setActive('contact')">Contact
         </a>
      </div>

      <!--Screen when Contact is the active page.-->
      <div class="nav-links" *ngIf="getActive() === 'contact'">
         <a class="nav-link" [routerLink]="['/welcome']" (click)="setActive('home')">Home
         </a>
            
         <a class="nav-link" [routerLink]="['/about']" (click)="setActive('about')">About
         </a>
         
         <a class="nav-link" [routerLink]="['/education']" (click)="setActive('education')">Education
         </a>
            
         <a class="nav-link" [routerLink]="['/experience']" (click)="setActive('experience')">Experience
         </a>
            
         <a class="nav-link" [routerLink]="['./skills']" (click)="setActive('skills')">Skills
         </a>
            
         <a class="nav-link" id="active" [routerLink]="['/contact']">Contact
         </a>
      </div>
       
   `,
   styleUrls: ['./headerFooter.scss']
})
export class HeaderComponent implements OnInit  {
   active: string;

   constructor() {
   }

   ngOnInit(): void {
      this.active = 'home';
   }

   setActive(activePg: string): void {
      this.active = activePg;
   }

   getActive(): string {
      return this.active;
   }

}
