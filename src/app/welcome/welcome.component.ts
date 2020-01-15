import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
// @ts-ignore
export class WelcomeComponent implements OnInit{
   mountains: string;
   myName: string;
   subText: string;

   constructor()  {
      this.myName = 'Drew Waller';
      this.subText = 'Software Engineer & Computer Scientist';
      this.mountains = './assets/images/ai-brain2.png';
   }

   ngOnInit(): void {
   }

}
