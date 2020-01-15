import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome';
import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer.component';
import { HeaderComponent } from './shared/header.component';
import { ExperienceComponent } from './experience';
import { SkillsComponent } from './skills';
import { EducationComponent } from './education';

// @ts-ignore
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
  ],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
