import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome';
import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { ExperienceComponent } from "./experience";
import { SkillsComponent } from "./skills";
import { EducationComponent } from "./education";

const ROUTES: Routes = [
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
         component: ContactComponent
      },
      {
         path: 'experience',
         component: ExperienceComponent,
      },
      {
         path: 'education',
         component: EducationComponent,
      },
      {
         path: 'skills',
         component: SkillsComponent

  }
];
// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule{ }
