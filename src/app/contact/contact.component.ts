import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
   selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
// @ts-ignore
export class ContactComponent implements OnInit {
  imageBackground;
  bgHeight;
  bgWidth;
  contactMeText;

  constructor()   {
     this.imageBackground = './assets/images/Vacation-img.png';
     this.bgHeight = 100;
     this.bgWidth = 100;
     this.contactMeText = "";

  }

  ngOnInit(): void {
  }


}


