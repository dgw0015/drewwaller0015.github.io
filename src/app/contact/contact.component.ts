import {Component, OnInit} from '@angular/core';
import { ContactMessage} from '../data/contact-message';

// @ts-ignore
@Component({
   selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
// @ts-ignore
export class ContactComponent implements OnInit {
  contact_bg: string;

  defaultContactInfo : ContactMessage = {
    name: 'Enter Your Name',
    email: 'someone123@provider.com',
    phoneNumber: '123-456-7890',
    prefContactMethod: 'email',
    message: 'Write your message'
  };

  contactMsg : ContactMessage =  { ...this.defaultContactInfo};

  constructor()   {
    this.contact_bg = './assets/images/AppleProducts.png';
  }

  ngOnInit(): void {
  }



}


