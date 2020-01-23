import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
// @ts-ignore
export class WelcomeComponent implements OnInit{
   mountains: string;
   myName: string;
   subText: string;
   mobileBg: string;
   tabletBg: string;
   screenWidth: number;
   screenHeight: number;

   constructor()  {
      this.myName = 'Drew Waller';
      this.subText = 'Software Engineer & Computer Scientist';
      this.mountains = './assets/images/ai-brain2.png';
      this.mobileBg = './assets/images/mobile-bg.png';
      this.tabletBg = './assets/images/iPad-bg.png';
   }

   ngOnInit(): void {
      this.screenWidth = innerWidth;
      this.screenHeight = innerHeight;
   }

   /* Returns the screen width at page load time.*/
   getScreenSize(): number {
      return this.screenWidth;
   }

   /* Returns the screen height at page load time.*/
   getScreenHeight(): number  {
      return this.screenHeight;
   }

}
