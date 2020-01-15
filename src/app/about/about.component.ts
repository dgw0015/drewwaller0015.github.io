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

   constructor()  {
      this.aboutBg = './assets/images/cool-ai-face.png';
      this.selfPortrait = './assets/images/headshot.png';
      this.myStory = 'A little more about me, I was born August 5th, 1992 in Tullahoma Tennessee. I lived in Tennessee until I was around 6 years old, ' +
          'then my mother and I moved to a little town in Florida where I lived until I was 21. After that I moved to Daphne Alabama where I moved back in with ' +
          'family to save money for college. In the time frame before I attended college, I took 4.5 years off to find out what I really enjoyed doing. I worked in retail, ' +
          'aviation, held management positions, and worked in the banking industry for around 3 years. The constant throughout these experiences was my love for technology ' +
          'and building incredible things, no matter how complex I also found myself drawn to the internet and how fast it was growing, how many people it connected, and ' +
          'how many industries it was changing. In the spring of 2016, I started attending Faulkner Community College in Fairhope Alabama, since then they have changed their ' +
          'name to Coastal Alabama Community College. I finished all my base courses here and transferred to Auburn University for the fall semester in 2017. I declared ' +
          'as a computer science major from the start and have had no second thoughts since. I will graduate from Auburn May 2, 2020 and have enjoyed my time at Auburn. ' +
          'I am a very well-rounded computer scientist at this point and know I will grow even faster once in the field. I am confident in most programming languages and ' +
          'understand the complexity and beauty of the networks we are utilizing today. This field is incredible to me, as software engineers and computer scientists we ' +
          'have the opportunity make millions and possibly billions of peoples lives better, the number of people that computing effects is indubitably mouth dropping.';
   }

   ngOnInit(): void {
   }



}
