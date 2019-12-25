import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills_bg: string;
  quote: string;
  quoteEndStmt: string;



  constructor() {
    this.skills_bg = './assets/images/cnn.png';
    this.quote = 'You do not eat foods that you dislike, you do not date people you cannot stand to be around.' +
        ' As I child we did not play with toys that bored us but rather the ones that allowed us to imagine a world' +
        ' better than the real one. So why do we now work jobs that we dislike and cannot stand to spend our time at?' +
        ' Why do we allow that priceless quality of imagination to fade away?';
    this.quoteEndStmt = 'Do what you LOVE. Do what you IMAGINE yourself doing'

  }

  ngOnInit() {
  }

}
