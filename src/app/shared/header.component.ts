import {Component, OnInit, Renderer2} from '@angular/core';


// @ts-ignore
@Component({
   selector: 'app-header',
   template: `
      <div class="topNavImg">
         <!-- creates circular portrait image -->
         <img [src] ='selfPortrait' alt="Portrait image of Drew" class="head-shot"
              [style.width.vw] = 'selfImgWidth'
              [style.height.vw] = selfImgHeight />
         <h1 id="welcome-text">{{myName}}
            <hr>
            <p id="sub-text">{{subText}}</p>
            <p id="andSign">&</p>
            <p id="secondSub-txt">Software Engineer</p>
         </h1>
      </div>
      
      <div class="sideNav">
         
         <!--Screen when the Home page is the active page.-->
       <div class="nav-links" *ngIf="getActive() === 'home'">
            <div class="nav-link" id="active"  [routerLink]="['/welcome']">
               <i class="fa fa-home"></i> Home
            </div>
            
            <div class="nav-link" [routerLink]="['/about']" (click)="setActive('about')">
               <i class="fa fa-info-circle"></i> About
            </div>
            
            <div class="nav-link" [routerLink]="['/education']" (click)="setActive('experience')">
               <i class="fa fa-graduation-cap"></i> Education
            </div>
            
            <div class="nav-link" [routerLink]="['/experience']" (click)="setActive('experience')">
               <i class="fa fa-cog"></i> Experience
            </div>
            
            <div class="nav-link"  [routerLink]="['./skills']" (click)="setActive('skills')">
               <i class="fa fa-sliders"></i> Skills
            </div>
            
            <div class="nav-link" [routerLink]="['/contact']" (click)="setActive('contact')">
               <i class="fa fa-envelope"></i> Contact
            </div>
         </div>

         <!--Screen when the About page is the active page.-->
         <div class="nav-links" *ngIf="getActive() === 'about'">
            <div class="nav-link" [routerLink]="['/welcome']" (click)="setActive('home')">
               <i class="fa fa-home"></i> Home
            </div>
            
            <div class="nav-link" id="active" [routerLink]="['/about']">
               <i class="fa fa-user"></i> About
            </div>

            <div class="nav-link" [routerLink]="['/education']" (click)="setActive('experience')">
               <i class="fa fa-graduation-cap"></i> Education
            </div>
            
            <div class="nav-link" [routerLink]="['/experience']" (click)="setActive('experience')">
               <i class="fa fa-cog"></i> Experience
            </div>
            
            <div class="nav-link" [routerLink]="['./skills']" (click)="setActive('skills')">
               <i class="fa fa-sliders"></i> Skills
            </div>
            
            <div class="nav-link" [routerLink]="['/contact']" (click)="setActive('contact')">
               <i class="fa fa-envelope"></i> Contact
            </div>
         </div>
         
         <!--Screen when the Education page is the active page.-->
         <div class="nav-links" *ngIf="getActive() === 'education'">
            <div class="nav-link" [routerLink]="['/welcome']" (click)="setActive('home')">
               <i class="fa fa-home"></i> Home
            </div>

            <div class="nav-link" [routerLink]="['/about']" (click)="setActive('about')">
               <i class="fa fa-info-circle"></i> About
            </div>

            <div class="nav-link" id="active" [routerLink]="['/education']">
               <i class="fa fa-graduation-cap"></i> Education
            </div>

            <div class="nav-link" [routerLink]="['/experience']" (click)="setActive('experience')">
               <i class="fa fa-cog"></i> Experience
            </div>

            <div class="nav-link" [routerLink]="['./skills']" (click)="setActive('skills')">
               <i class="fa fa-sliders"></i> Skills
            </div>

            <div class="nav-link" [routerLink]="['/contact']" (click)="setActive('contact')">
               <i class="fa fa-envelope"></i> Contact
            </div>
         </div>

         <!--Screen when the Experience page is the active page.-->
         <div class="nav-links" *ngIf="getActive() === 'experience'">
            <div class="nav-link" [routerLink]="['/welcome']" (click)="setActive('home')">
               <i class="fa fa-home"></i> Home
            </div>
            
            <div class="nav-link" [routerLink]="['/about']" (click)="setActive('about')">
               <i class="fa fa-user"></i> About
            </div>

            <div class="nav-link" [routerLink]="['/education']" (click)="setActive('experience')">
               <i class="fa fa-graduation-cap"></i> Education
            </div>
            
            <div class="nav-link" id="active" [routerLink]="['/experience']">
               <i class="fa fa-cog"></i> Experience
            </div>
            
            <div class="nav-link" [routerLink]="['./skills']" (click)="setActive('skills')">
               <i class="fa fa-sliders"></i> Skills
            </div>
            
            <div class="nav-link" [routerLink]="['/contact']" (click)="setActive('contact')">
               <i class="fa fa-envelope"></i> Contact
            </div>
         </div>

         <!--Screen when the Skills page is the active page.-->
         <div class="nav-links" *ngIf="getActive() === 'skills'">
            <div class="nav-link" [routerLink]="['/welcome']" (click)="setActive('home')">
               <i class="fa fa-home"></i> Home
            </div>
            
            <div class="nav-link" [routerLink]="['/about']" (click)="setActive('about')">
               <i class="fa fa-user"></i> About
            </div>

            <div class="nav-link" [routerLink]="['/education']" (click)="setActive('experience')">
               <i class="fa fa-graduation-cap"></i> Education
            </div>
            
            <div class="nav-link" [routerLink]="['/experience']" (click)="setActive('experience')">
               <i class="fa fa-cog"></i> Experience
            </div>
            
            <div class="nav-link" id="active" [routerLink]="['./skills']">
               <i class="fa fa-sliders"></i> Skills
            </div>
            
            <div class="nav-link" [routerLink]="['/contact']" (click)="setActive('contact')">
               <i class="fa fa-envelope"></i> Contact
            </div>
         </div>

         <!--Screen when Contact is the active page.-->
         <div class="nav-links" *ngIf="getActive() === 'contact'">
            <div class="nav-link" [routerLink]="['/welcome']" (click)="setActive('home')">
               <i class="fa fa-home"></i> Home
            </div>
            
            <div class="nav-link" [routerLink]="['/about']" (click)="setActive('about')">
               <i class="fa fa-user"></i> About
            </div>

            <div class="nav-link" [routerLink]="['/education']" (click)="setActive('experience')">
               <i class="fa fa-graduation-cap"></i> Education
            </div>
            
            <div class="nav-link" [routerLink]="['/experience']" (click)="setActive('experience')">
               <i class="fa fa-cog"></i> Experience
            </div>
            
            <div class="nav-link" [routerLink]="['./skills']" (click)="setActive('skills')">
               <i class="fa fa-sliders"></i> Skills
            </div>
            
            <div class="nav-link" id="active" [routerLink]="['/contact']">
               <i class="fa fa-envelope"></i> Contact
            </div>
         </div>
     </div>
      
     <div id="Home" class="tabContent">
        <h3>Home</h3>
     </div>
     
     <div id="About" class="tabContent">
        <h3>About</h3>
     </div>
     
     <div id="Experience" class="tabContent">
        <h3>Experience</h3>
     </div>
     
     <div id="Skills" class="tabContent">
        <h3>Skills</h3>
     </div>
     
     <div id="Contact" class="tabContent">
        <h3>Contact</h3>
     </div>
       
   `,
   styleUrls: ['./headerFooter.scss']
})
export class HeaderComponent implements OnInit  {
   active: string;
   selfPortrait: string;
   selfImgWidth: number;
   selfImgHeight: number;
   myName: string;
   subText: string;
   navLink: any;
   navLinks: any;
   activeClass: string;

   constructor(private renderer: Renderer2) {
      this.selfPortrait = './assets/images/Headshot.jpg';
      this.selfImgWidth = 7;
      this.selfImgHeight = 7;
      this.myName = 'Drew Waller';
      this.subText = 'Computer Scientist';
   }

   ngOnInit(): void {
      this.active = 'home';
   }


   setActive(activePg: string): void {
      this.active = activePg;
      this.showContentFor();
   }

   getActive(): string {
      return this.active;
   }

   showContentFor(): void {
      let activePg = this.getActive();
      let tabs = document.getElementsByClassName('tabContent');
      for (let i = 0; i < tabs.length; i++)  {
         this.renderer.setStyle(tabs[i], 'visibility', 'hidden');
      }
      if (activePg === 'home') {
        const about: HTMLElement = document.getElementById('About');
        const experience: HTMLElement = document.getElementById('Experiences');
      }
      else if (activePg === 'about') {

      }
      else if (activePg === 'experience')  {

      }
      else if (activePg === 'skills')   {

      }
      else {

      }
   }

}
