import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  pageBg: string;
  auburnLogo: string;
  ccLogo: string;
  stadium: string;

  constructor() {
    this.pageBg = './assets/images/DrinkMoreCoffee.png';
    this.auburnLogo = './assets/image_icons/auburnLogo.png';
    this.stadium = './assets/images/stadium.png';
    this.ccLogo = './assets/images/cc-logo.png';
  }

  ngOnInit() {
  }

}
