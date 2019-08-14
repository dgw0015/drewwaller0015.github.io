import {Component, OnInit} from '@angular/core';


// @ts-ignore
@Component({
   selector: 'app-footer',
   template: `
      <footer class="footer">
         <div class="container">
            <p id="copyright">&copy;Drew Waller</p>
         </div>
      </footer>
   `,
   styleUrls: ['./headerFooter.scss']
})
export class FooterComponent implements OnInit  {
   constructor()  {

   }
   ngOnInit(): void {
   }
}
