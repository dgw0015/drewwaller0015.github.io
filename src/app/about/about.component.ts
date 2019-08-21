import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
   selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
// @ts-ignore
export class AboutComponent implements OnInit   {
   loveWhatYouDo;
   loveWhatYouDoText;
   educationText;
   experienceText;
   skillsText;

   constructor()  {
      this.loveWhatYouDo = './assets/images/LoveYourCareer.png';
      this.loveWhatYouDoText = 'Why I Love What I Do';
      this.educationText = 'My Education';
      this.experienceText = 'My Experience & Journey Into Computing';
      this.skillsText = 'My Skills';
   }

   ngOnInit(): void {
   }
}
