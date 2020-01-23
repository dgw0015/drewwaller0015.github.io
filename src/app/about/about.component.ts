import { Component, OnInit } from '@angular/core';

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
   screenWidth: number;
   screenHeight: number;

   constructor()  {
      this.aboutBg = './assets/images/cool-ai-face.png';
      this.selfPortrait = './assets/images/headshot.png';
      this.myStory = 'A little more about me, I was born August 5th, 1992 in Tullahoma Tennessee. I lived in Tennessee until I was around 6 years old, ' +
          'then my mother and I moved to a little town in Florida where I lived until I was 21. At 21 I moved back in with my family who lived 5 hours away in Daphne Alabama. ' +
          'Here I made my mind up that I wanted to go back to school and started saving money. Meanwhile, before I attended college I took a total of 4.5 years off to ' +
          'discover what I really enjoyed doing. I worked in a wide scope of industries from retail, aviation, held management positions, and the banking industry for many years. ' +
          'The constant throughout these experiences was my love for technology and building incredible things. Regardless of the complexity, the internet of things always intrigued me. ' +
          'There were multiple reasons for this, the swift always changing pace of technology, how rapidly it is growing, the plethora of people it connects, and the priceless flow of ' +
          'knowledge it makes available to all. In the spring of 2016, I started attending Coastal Alabama Community College. I finished all my base courses here and ' +
          'transferred to Auburn University in the fall of 2017. I declared my Computer Science major from the beginning and have not turned back since. ' +
          'I will graduate from Auburn University May 2, 2020 and have enjoyed my time at Auburn. I am a well-rounded Computer Scientist at this point and know I will grow ' +
          'even faster once I am emerged into my career. I am confident in most programming languages and understand the complexity and beauty of the networks we are utilizing today. ' +
          'This field is incredible to me, as a Software Engineer and Computer Scientists we have the opportunity to make millions or billions of peoples lives ' +
          'better. Furthermore, to me at least, the most crucial topic I have mentioned is the mass number of people that computing effects, it is indubitably mouth dropping.';
   }

   ngOnInit(): void {
      this.screenWidth = innerWidth;
      this.screenHeight = innerHeight;
   }

   /* Returns the screen width at page load time.*/

   getScreenWidth(): number   {
      return this.screenWidth;
   }

   /* Returns the screen height at page load time.*/
   getScreenHeight(): number  {
      return this.screenHeight;
   }


}
