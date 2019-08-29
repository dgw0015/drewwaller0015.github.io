import {Component, OnInit} from '@angular/core';


// @ts-ignore
@Component({
   selector: 'app-footer',
   template: `
      <footer class="footer">
<!--         <div class="social-media-links">-->
<!--            <a class="facebook-link" target="_blank" href="https://www.facebook.com/drew.waller.73">-->
<!--               <img [src] ='facebookLink' alt="Facebook link" class="facebook-link"-->
<!--                    [style.height.vw] = 2-->
<!--                    [style.width.vw] = 2 />-->
<!--            </a>-->
<!--            <a class="instagram-link" target="_blank" href="https://www.instagram.com/dwaller_45/">-->
<!--               <img [src] ='instagramLink' alt="instagram link" class="instagram-link"-->
<!--                    [style.height.vw] = 2.1-->
<!--                    [style.width.vw] = 2.1 />-->
<!--            </a>-->
<!--            <a class="linkedIn-link" target="_blank" href="">-->
<!--               <img [src] ='linkedInLink' alt="linkedIn link" class="linkedIn-link"-->
<!--                    [style.height.vw] = 2-->
<!--                    [style.width.vw] = 2 />-->
<!--            </a>-->
<!--            <a class="handshake-link" target="_blank" href="">-->
<!--               <img [src] ='handshakeLink' alt="handshake link" class="handshake-link"-->
<!--                    [style.height.vw] = 2-->
<!--                    [style.width.vw] = 2 />-->
<!--            </a>-->
<!--         </div>-->
         <div class="container">
            <p id="copyright">&copy;Drew Waller</p>
         </div>
      </footer>
   `,
   styleUrls: ['./headerFooter.scss']
})
export class FooterComponent implements OnInit {
   facebookLink: string;
   instagramLink: string;
   linkedInLink: string;
   handshakeLink: string;

   constructor() {}

   ngOnInit(): void {
      this.facebookLink = './assets/image_icons/facebook-icon.png';
      this.instagramLink = './assets/image_icons/instagram-icon.png';
      this.linkedInLink = './assets/image_icons/Linked-in-icon.png';
      this.handshakeLink = './assets/image_icons/Handshake-icon.png';
   }

}