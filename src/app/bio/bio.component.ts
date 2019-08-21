import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  headingText;
  bgImage;

  constructor()  {
    this.headingText = 'My Interactive Bio Page';
    this.bgImage = './assets/images/LoveYourCareer.png';
  }

  ngOnInit(): void {
  }

}
