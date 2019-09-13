import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  pageBg: string;
  auburnLogo: string;


  constructor() {
    this.pageBg = './assets/images/DrinkMoreCoffee.png';
    this.auburnLogo = './assets/image_icons/auburnLogo.png'
  }

  ngOnInit() {
  }

}
