import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  auburnLogo: string;
  ccLogo: string;
  stadium: string;
  samfordHall: string;
  screenWidth: number;

  constructor() {
    this.auburnLogo = './assets/image_icons/auburnLogo.png';
    this.stadium = './assets/images/stadium.png';
    this.ccLogo = './assets/images/cc-logo.png';
    this.samfordHall = './assets/images/Auburn-University.png';
  }

  ngOnInit() {
    this.screenWidth = innerWidth;
  }

  /* Returns the screen width at page load time.*/
  getScreenWidth(): number  {
    return this.screenWidth;
  }


}
