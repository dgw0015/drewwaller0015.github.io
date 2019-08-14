import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
// @ts-ignore
export class WelcomeComponent implements OnInit{
   homeBg;
   selfPortrait;
   selfImgWidth;
   selfImgHeight;
   imageWidth;
   imageHeight;
   myName;
   subText;

   constructor()  {
      this.homeBg = './assets/images/HomeBg.jpg';
      this.selfPortrait = './assets/images/headshot.jpg';
      this.selfImgWidth = 13.9;
      this.selfImgHeight = 13.9;
      this.imageWidth = 100;
      this.imageHeight = 100;
      this.myName = 'Hi, i\'m Drew Waller';
      this.subText = 'And i\'m a Computer Scientist';
   }

   ngOnInit(): void {
   }

}
