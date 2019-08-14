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
   headingText;
   dockerSvg;
   angularIconSvg;
   ABoutMeText;

   constructor()  {
      this.loveWhatYouDo = './assets/images/LoveYourCareer.png';
      this.headingText = 'Love What You Do!';
      this.angularIconSvg = './assets/svg/angular-icon.svg';
      this.dockerSvg = './assets/svg/Docker.svg';
      this.ABoutMeText = 'More About Me. . .';
   }

   ngOnInit(): void {
   }
}
