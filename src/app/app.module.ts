import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { CoursedivComponent } from './coursediv/coursediv.component';
import { ExploresectionComponent } from './exploresection/exploresection.component';
import { SixthdivComponent } from './sixthdiv/sixthdiv.component';
import { IonicModule } from '@ionic/angular';
import { AccordianComponent } from './accordian/accordian.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    CoursedivComponent,
    ExploresectionComponent,
    SixthdivComponent,
    AccordianComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
