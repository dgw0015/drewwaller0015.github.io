import { Component, OnInit, Renderer2 } from '@angular/core';
import { HostListener } from "@angular/core";

// @ts-ignore
@Component({
   selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
// @ts-ignore
export class AboutComponent implements OnInit   {loveWhatYouDoText: string;
   aboutBg: string;
   myStory: string;
   selfPortrait: string;
   selfImgWidth: number;
   selfImgHeight: number;
   screenHeight: any;
   screenWidth: any;
   onMobileDevice: boolean;

   constructor(private renderer: Renderer2)  {
      this.aboutBg = './assets/images/iPad.png';
      this.onResize();
      this.selfPortrait = './assets/images/Headshot.jpg';
      this.selfImgWidth = 11.5;
      this.selfImgHeight = 11.5;
      this.myStory = 'I am Drew Waller, I am 27 and a senior at Auburn University. I will be graduating in May 2020 with a bachelors of science' +
          ' majoring in computer science with a minor in business.';
   }

   @HostListener('window:resize', ['$event'])
   onResize(event?)  {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
   }

   ngOnInit(): void {
      this.onResize();
   }

   // getScreenStatus() {
   //    if (this.screenWidth <= 400 || this.screenHeight <= 600)   {
   //       this.onMobileDevice = true;
   //    }
   // }



}
