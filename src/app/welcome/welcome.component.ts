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
   welcomeBox_text;

   constructor()  {
      this.homeBg = './assets/images/HomeBg.jpg';
      this.selfPortrait = './assets/images/headshot.jpg';
      this.selfImgWidth = 13.8;
      this.selfImgHeight = 13.8;
      this.imageWidth = 100;
      this.imageHeight = 100;
      this.myName = 'Hi, i\'m Drew Waller';
      this.subText = 'And i\'m a Computer Scientist';
      this.welcomeBox_text = 'I created this site to demonstrate my skill with a well known and widely used frontend programming language. This site is written in' +
          ' Angular, a frontend language created by Google. Other than exposure to employers, I also created a personal website to share general' +
          ' information about my experiences, education, and advice to others.'
   }

   ngOnInit(): void {
   }

}
