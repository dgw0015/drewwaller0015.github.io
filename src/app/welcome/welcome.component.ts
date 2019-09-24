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
      this.subText = 'Web Designer & Software Engineer';
      this.mountains = './assets/images/Mountains.png';
   }

   ngOnInit(): void {
   }

}
