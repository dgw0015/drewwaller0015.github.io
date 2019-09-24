import { Component, OnInit, Renderer2 } from '@angular/core';
import { HostListener } from "@angular/core";

// @ts-ignore
@Component({
   selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
// @ts-ignore
export class AboutComponent implements OnInit   {
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
      this.selfPortrait = './assets/images/headshot.jpg';
      this.selfImgWidth = 11.5;
      this.selfImgHeight = 11.5;
      this.myStory = 'I am Drew Waller, I am 27 and a senior at Auburn University. I will be graduating in May 2020 with a bachelors of science' +
          ' majoring in computer science with a minor in business. I am sure the first thing that you notice is that I am much older than your average' +
          ' senior in college. This is because after I graduated from I school at 18 I had no clue what I wanted to do for the rest of my life. So' +
          ' instead of declaring a major that I would probably change many times I started working full-time in many different industries as you' +
          ' will see on my experience page. While I was working these many jobs I always had one constant that I did in my free time, technology. In all' +
          ' aspects of the industry I am always interested in the fast growing/changing pace of technology. After four years of working I decided that computer' +
          ' science was exactly what I wanted to do as my career. I have not looked back since, I still love and enjoy everything I have and am learning.' +
          ' I is a great feeling to know that I will never work a day in my life because I will love what I do.';
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
