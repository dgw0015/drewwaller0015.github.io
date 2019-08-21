import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome';
import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import {BioComponent} from "./bio";

const ROUTES: Routes = [
  // Starting page = HOME.
  {
        path: '', redirectTo: 'welcome', pathMatch: 'full'
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
         path: 'contact',
         component: ContactComponent,
      },
      {
         path: 'bio',
         component: BioComponent
  }
];
// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule{ }
