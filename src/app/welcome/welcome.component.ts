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
   welcomeBox_text: string;

   constructor()  {
      this.myName = 'Drew Waller';
      this.subText = 'Web Designer & Software Engineer';
      this.mountains = './assets/images/Mountains.png';
      this.welcomeBox_text = 'I created this site to demonstrate my skill with a well known and widely used frontend programming language. This site is written in' +
          ' Angular, a frontend language created by Google. Other than exposure to employers, I also created a personal website to share general' +
          ' information about my experiences, education, and advice to others.'
   }

   ngOnInit(): void {
   }

}
