import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills_bg: string;
  skills_bg2: string;
  skills_bg3: string;


  constructor() {
    this.skills_bg = './assets/images/Lightning.png';
    this.skills_bg2 = './assets/images/GreatCareer.png';
    this.skills_bg3 = './assets/images/CrackedComputer.png'
  }

  ngOnInit() {
  }

}
