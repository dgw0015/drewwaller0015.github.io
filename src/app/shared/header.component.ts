import { Component, OnInit, Renderer2 } from '@angular/core';


// @ts-ignore
@Component({
   selector: 'app-header',
   template: `       
             
       <div id="fullNav" class="overlay">
          <a href="javascript:void(0)" class="close-btn" 
             (click)="closeNav('fullNav')">&times;</a>

          <!--Screen when the Home page is the active page.-->
          <div class="nav-links" *ngIf="getActive() === 'home'">
             <div class="link" >
               <a target="_self" id="active"
                  [routerLink]="['/welcome']" (click)="setActive('home')"><h1 class="display-3">Home</h1>
               </a>
             </div>
             <div class="link">
               <a target="_self"
                   [routerLink]="['/about']" (click)="setActive('about')"><h1 class="display-3">About</h1>
               </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/education']" (click)="setActive('education')"><h1 class="display-3">Education</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/experience']" (click)="setActive('experience')"><h1 class="display-3">Experience</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['./skills']" (click)="setActive('skills')"><h1 class="display-3">Skills</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/contact']" (click)="setActive('contact')"><h1 class="display-3">Contact</h1>
                </a>
             </div>
          </div>

          <!--Screen when the About page is the active page.-->
          <div class="nav-links" *ngIf="getActive() === 'about'">
             <div class="link">
                <a [routerLink]="['/welcome']" (click)="setActive('home')"><h1 class="display-3">Home</h1>
                </a>
             </div>
             <div class="link" >
                <a target="_self" id="active"
                   [routerLink]="['/about']"><h1 class="display-3">About</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/education']" (click)="setActive('education')"><h1 class="display-3">Education</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/experience']" (click)="setActive('experience')"><h1 class="display-3">Experience</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['./skills']" (click)="setActive('skills')"><h1 class="display-3">Skills</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/contact']" (click)="setActive('contact')"><h1 class="display-3">Contact</h1>
                </a>
             </div>
          </div>

          <!--Screen when the Education page is the active page.-->
          <div class="nav-links" *ngIf="getActive() === 'education'">
             <div class="link">
                <a [routerLink]="['/welcome']" (click)="setActive('home')"><h1 class="display-3">Home</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/about']" (click)="setActive('about')"><h1 class="display-3">About</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self" id="active"
                   [routerLink]="['/education']"><h1 class="display-3">Education</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/experience']" (click)="setActive('experience')"><h1 class="display-3">Experience</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['./skills']" (click)="setActive('skills')"><h1 class="display-3">Skills</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/contact']" (click)="setActive('contact')"><h1 class="display-3">Contact</h1>
                </a>
             </div>
          </div>

          <!--Screen when the Experience page is the active page.-->
          <div class="nav-links" *ngIf="getActive() === 'experience'">
             <div class="link">
                <a [routerLink]="['/welcome']" (click)="setActive('home')"><h1 class="display-3">Home</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/about']" (click)="setActive('about')"><h1 class="display-3">About</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/education']" (click)="setActive('education')"><h1 class="display-3">Education</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self" id="active"
                   [routerLink]="['/experience']"><h1 class="display-3">Experience</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['./skills']" (click)="setActive('skills')"><h1 class="display-3">Skills</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/contact']" (click)="setActive('contact')"><h1 class="display-3">Contact</h1>
                </a>
             </div>
          </div>

          <!--Screen when the Skills page is the active page.-->
          <div class="nav-links" *ngIf="getActive() === 'skills'">
             <div class="link">
                <a [routerLink]="['/welcome']" (click)="setActive('home')"><h1 class="display-3">Home</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/about']" (click)="setActive('about')"><h1 class="display-3">About</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/education']" (click)="setActive('education')"><h1 class="display-3">Education</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/experience']" (click)="setActive('experience')"><h1 class="display-3">Experience</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self" id="active"
                   [routerLink]="['./skills']"><h1 class="display-3">Skills</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/contact']" (click)="setActive('contact')"><h1 class="display-3">Contact</h1>
                </a>
             </div>
          </div>

          <!--Screen when Contact is the active page.-->
          <div class="nav-links" *ngIf="getActive() === 'contact'">
             <div class="link">
                <a [routerLink]="['/welcome']" (click)="setActive('home')"><h1 class="display-3">Home</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/about']" (click)="setActive('about')"><h1 class="display-3">About</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/education']" (click)="setActive('education')"><h1 class="display-3">Education</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['/experience']" (click)="setActive('experience')"><h1 class="display-3">Experience</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self"
                   [routerLink]="['./skills']" (click)="setActive('skills')"><h1 class="display-3">Skills</h1>
                </a>
             </div>
             <div class="link">
                <a target="_self" id="active"
                   [routerLink]="['/contact']"><h1 class="display-3">Contact</h1>
                </a>
             </div>
          </div>
       </div>
       <div class="header">
          <div class="open-btn" (click)="openNav('fullNav')"><i class="fas fa-bars"></i></div>
       </div>

   `,
   styleUrls: ['./headerFooter.scss']
})
export class HeaderComponent implements OnInit  {
   active: string;

   constructor(private renderer: Renderer2) {
   }

   ngOnInit(): void {
      this.active = 'home';
   }

   closeNav(nav: string): void  {
      const element: HTMLElement = document.getElementById(nav);
      this.renderer.setStyle(element, 'height', '0');
   }

   openNav(nav: string): void   {
      const element: HTMLElement = document.getElementById(nav);
      this.renderer.setStyle(element, 'height', '100%');
   }

   setActive(activePg: string): void {
      this.active = activePg;
      this.closeNav('nav');
   }

   getActive(): string {
      return this.active;
   }

}

