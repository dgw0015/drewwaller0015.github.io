import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  google: string;
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
    this.resumeDownloadLink = './assets/Drew G Waller 2019 Resume.pdf';
    this.winnDixieExp = 'I worked at Winn-Dixie in Lake City, Florida for my last two years of high school. Started as a cashier, then was promoted many times from,' +
        ' cashier, customer service lead, in-store coordinator, and frontend manager.';
    this.columbiaBankExp = 'Since TIMCO job was during the night shift I started working at Columbia Bank part-time as a bank teller. I enjoyed it more then TIMCO so' +
        ' I became full-time here. I was promoted from teller to customer service rep, to a lending officer.';
    this.autoExp = 'A friend of mine had a auto shop and needed some help so he hired me part-time to help out. I learned great things here that I still use to this day' +
        ' and saves me a lot of money.';
    this.aviationExp = 'After graduating I wanted to try something completely different. So I started working full-time at TIMCO in Lake City, Florida as a aviation' +
        ' mechanic.';
    this.moveToAl_penAirExp = 'After many years in banking I still did not enjoy going to work everyday. So I made the hard decision to move in with my parents in Daphne, Alabama and' +
        ' eventually attend college for something in technology. Once I was all moved I quickly got a full-time job at PenAir Federal Credit Union as a member advisor. This position was' +
        ' truly a universal banker. I could do anything from a simple withdrawal/deposit to a mortgage loan for a home. This was a great place to save money before attending college.';
    this.cokeExp = 'I worked for Coca Cola Bottling Consolidated for a year and a half in Orange Beach, Florida while I was attending Coastal Alabama Community College to finish my basic classes.' +
        ' Then moved to Auburn to Attend Auburn University.';
    this.auburnPersonalTrainerExp = 'NASM certified personal trainer at Maxx Fitness. Here I was a certified trainer with a 20 to 30 clients.';
    this.hotelAtAUExp = 'Being a personal trainer started taking to much time away from my studies so I left and got a night job as a Banquet Bartender at the Auburn University hotel.';
    this.internshipExp = 'Had a great summer internship as a applications developer at J.B. Hunt Transportation. They are a fortune 500 company primarily in logistic. They are creating amazing applications' +
        ' that are growing at rapid speeds. Here I developed AI bots and started the integration of API\'s into the company.';
  }

  ngOnInit() {
  }

}
