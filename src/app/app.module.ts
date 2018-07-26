import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BackgroundComponent } from './components/background/background.component';
import { ServicesComponent } from './components/services/services.component';
import { LocationComponent } from './components/location/location.component';
import { ContactComponent } from './components/contact/contact.component';
import { InitialEvaluationComponent } from './components/services/service/initial-evaluation/initial-evaluation.component';
import { IndividualPsychotherapyComponent } from './components/services/service/individual-psychotherapy/individual-psychotherapy.component';
import { RelationshipTherapyComponent } from './components/services/service/relationship-therapy/relationship-therapy.component';
import { GroupPsychotherapyComponent } from './components/services/service/group-psychotherapy/group-psychotherapy.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BackgroundComponent,
    ServicesComponent,
    LocationComponent,
    ContactComponent,
    InitialEvaluationComponent,
    IndividualPsychotherapyComponent,
    RelationshipTherapyComponent,
    GroupPsychotherapyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
