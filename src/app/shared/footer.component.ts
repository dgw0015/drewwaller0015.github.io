import {Component, OnInit} from '@angular/core';


// @ts-ignore
@Component({
   selector: 'app-footer',
   template: `
      <div class="footer">
         <p class="lead" id="footer">&copy;copyright</p>
      </div>
   `,
   styleUrls: ['./headerFooter.scss']
})
export class FooterComponent implements OnInit {

   constructor() {}

   ngOnInit(): void {
   }

}
