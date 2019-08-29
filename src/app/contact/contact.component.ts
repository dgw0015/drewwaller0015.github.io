import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
   selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
// @ts-ignore
export class ContactComponent implements OnInit {
  bgHeight;
  bgWidth;
  contactMeText;

  constructor()   {
     this.contactMeText = "";

  }

  ngOnInit(): void {
  }


}


