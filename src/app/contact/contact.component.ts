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



  constructor()   {
    this.contact_bg = './assets/images/AppleProducts.png';
  }

  ngOnInit(): void {
  }



}


