import {Component, OnInit, Renderer2} from '@angular/core';

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
  aviationExp: string;
  moveToAl_penAirExp: string;
  cokeExp: string;
  auburnPersonalTrainerExp: string;
  hotelAtAUExp: string;
  mobileBg: string;
  internshipExp: string;
  screenWidth: number;

  constructor(private renderer: Renderer2) {
    this.google = './assets/images/GoogleMonitor.png';
    this.mobileBg = './assets/images/expMobileBg.png';
    this.resumeDownloadLink = './assets/Website-Version-Resume-2019.pdf';
    this.winnDixieExp = 'I worked at Winn-Dixie in Lake City, Florida for my last two years of high school and as a weekend job while working full-time at Columbia Bank. Started as a cashier, then was promoted many times from,' +
        ' cashier, customer service lead, in-store coordinator, and frontend manager.';
    this.columbiaBankExp = 'I started working at Columbia Bank part-time as a bank teller while I was still working at Winn-Dixie on the weekends as an In-Store Coordinator, ' +
        ' and working the night shift at TIMCO. After a few months I left TIMCO and moved into a full-time position here.' +
        ' I was promoted many times from teller to customer service rep, and then lending officer where I process multiple times of consumer loans.';
    this.aviationExp = 'After graduating from high school I was not a 100% sure what I wanted to do. I wanted to try something different. So I started working full-time at TIMCO in Lake City, Florida ' +
        'as an aviation mechanic. I performed many repairs on multiple different type of commercial airliners such as,' +
        ' Boeing 737, 747, and Airbus 319, 320.';
    this.moveToAl_penAirExp = 'I made a hard decision to move back in with my parents who lived in Daphne, Alabama and' +
        ' eventually start college for a computer science degree. I started at PenAir Federal Credit Union as a member advisor. This position was' +
        ' truly a universal banker. I could do anything from a simple withdrawal/deposit to a mortgage loan.';
    this.cokeExp = 'I worked for Coca Cola Bottling Consolidated in Orange Beach, Florida. In this position I was a FLEX merchandiser, I effectively placed special sale items' +
        ' throughout many stores based on the patterns of guests as they entered and walked around the store.' +
        ' This placement strategy always me to increase sales at these store locations. I left this job to moved to Auburn and Attend Auburn University.';
    this.auburnPersonalTrainerExp = 'I received my certification through the National Academy of Sport Medicine (NASM). I primarily worked with my clients at Maxx Fitness in Auburn AL.' +
        ' Here I had anywhere from 25 to 35 clients and customized each of their workouts specifically for them to achieve their goals. I created diverse diet plans, performed monthly measurements, tracked their Body mass index(BMI),' +
        ' and tracked all stages of their progress to hold them accountable.';
    this.hotelAtAUExp = 'At the Auburn Hotel I was a Banquets Server | Bartender. While working this position I was also a personal trainer at Maxx fitness.' +
        ' In this position I worked numerous types of events where from buffets to high end events with synchronized service. Further, I bar tended many events from simple wine tastings,' +
        ' to full bars with ever cocktail available for purchase. I left the hotel to finish my last two semesters at Auburn.';
    this.internshipExp = 'Had a great summer internship as a applications developer at J.B. Hunt Transportation, a fortune 500 company primarily in logistic and are creating amazing applications' +
        ' that are growing at rapid speeds. Here I developed AI bots and started the integration of more precise API\'s into the companies application building platform. Furthermore, throughout the summer I also learned' +
        ' how to use to Docker to containerize applications and how to quickly expose API endpoints using Spring Boot IO. ';
  }

  ngOnInit() {
    this.screenWidth = innerWidth;
  }

  /* Returns the screen width at page load time.*/
  getScreenWidth(): number  {
    return this.screenWidth;
  }

  /* Flips the card when the front side is showing.*/
  flipCard(cardID: string): void  {
    const element: HTMLElement = document.getElementById(cardID);
    this.renderer.setStyle(element, 'transform', 'rotateY(180deg)');
  }

  /* Flips the card when the back side is showing.*/
  flipCardBack(cardID: string): void {
    const element: HTMLElement = document.getElementById(cardID);
    this.renderer.setStyle(element, 'transform', 'rotateY(0deg)')
  }


}
