import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
   selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
// @ts-ignore
export class ContactComponent implements OnInit {
  contact_bg: string;
  screenWidth: number;


  constructor()   {
    this.contact_bg = './assets/images/PCWithPurple.png';
  }

  ngOnInit(): void {
    this.screenWidth = innerWidth;
  }

  /* Returns the screen width at page load time.*/
  getScreenWidth(): number  {
    return this.screenWidth;
  }

}


