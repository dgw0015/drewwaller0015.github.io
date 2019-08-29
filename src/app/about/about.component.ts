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
   screenHeight: any;
   screenWidth: any;
   onMobileDevice: boolean;
   resumeDownloadLink: string;

   constructor(private renderer: Renderer2)  {
      this.loveWhatYouDoText = 'Why I Love Computer Science';
      this.onResize();
      this.resumeDownloadLink = './assets/Drew G Waller 2019 Resume.pdf'
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
