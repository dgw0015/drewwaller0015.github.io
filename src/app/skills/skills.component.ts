import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills_bg: string;
  mobileBg: string;
  mobileBanner: string;
  screenWidth: number;


  constructor() {
    this.skills_bg = './assets/images/cnn.png';
    this.mobileBg = './assets/images/skillsBg.png';
    this.mobileBanner = './assets/images/skillsBanner.png';
  }

  ngOnInit() {
    this.screenWidth = innerWidth;
  }

  /* Returns the screen width at page load time.*/
  getScreenWidth(): number  {
    return this.screenWidth;
  }

}
