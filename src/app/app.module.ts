import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MonsterComponent } from './core/components/monster/monster.component';
import { HomeComponent } from './modules/home/home.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { AboutComponent } from './modules/about/about.component';
import { WorkExperienceComponent } from './modules/component/work-experience/work-experience.component';
import { CertificateComponent } from './modules/component/certificate/certificate.component';
import { SideProjectsComponent } from './modules/component/side-projects/side-projects.component';
import { GoTopButtonComponent } from './shared/components/go-top-button/go-top-button.component';
import { PageSpeedInsightsComponent } from './modules/component/page-speed-insights/page-speed-insights.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MonsterComponent,
    HomeComponent,
    ButtonComponent,
    AboutComponent,
    WorkExperienceComponent,
    CertificateComponent,
    SideProjectsComponent,
    GoTopButtonComponent,
    PageSpeedInsightsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
