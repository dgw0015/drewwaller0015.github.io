import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  google: string;
  pcDark: string;
  crackedPC: string;
  resumeDownloadLink: string;
  winnDixieExp: string;
  columbiaBankExp: string;
  autoExp: string;
  aviationExp: string;
  moveToAl_penAirExp: string;
  cokeExp: string;
  auburnPersonalTrainerExp: string;
  hotelAtAUExp: string;
  internshipExp: string;


  constructor() {
    this.google = './assets/images/GoogleMonitor.png';
    this.pcDark = './assets/images/PCWithPurple.png';
    this.resumeDownloadLink = './assets/Drew G Waller 2019 Resume.pdf';
    this.winnDixieExp = 'I worked at Winn-Dixie for my last two years of high school. Started as a cashier, then was promoted many times from,' +
        ' cashier, customer service lead, in-store coordinator, and frontend manager.';
    this.columbiaBankExp = 'Columbia Bank ...';
    this.autoExp = 'auto exp...';
    this.aviationExp = 'TIMCO ...';
    this.moveToAl_penAirExp = 'PenAir FCU . . .';
    this.cokeExp = 'Coca Cola Bottling Consolidated';
    this.auburnPersonalTrainerExp = 'NASM certified personal trainer at Maxx Fitness';
    this.hotelAtAUExp = 'Bartender at the Auburn hotel...';
    this.internshipExp = 'J.B. Hunt Transportation... ';
    this.crackedPC = './assets/images/CrackedComputerOnChair.png';
  }

  ngOnInit() {
  }

}
