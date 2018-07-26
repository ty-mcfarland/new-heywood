import { GroupPsychotherapyComponent } from './components/services/service/group-psychotherapy/group-psychotherapy.component';
import { RelationshipTherapyComponent } from './components/services/service/relationship-therapy/relationship-therapy.component';
import { IndividualPsychotherapyComponent } from './components/services/service/individual-psychotherapy/individual-psychotherapy.component';
import { LocationComponent } from './components/location/location.component';
import { ContactComponent } from './components/contact/contact.component';
import { BackgroundComponent } from './components/background/background.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { InitialEvaluationComponent } from './components/services/service/initial-evaluation/initial-evaluation.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'background',
    component: BackgroundComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'services/evaluation',
    component: InitialEvaluationComponent
  },
  {
    path: 'services/psychotherapy',
    component: IndividualPsychotherapyComponent
  },
  {
    path: 'services/relationship',
    component: RelationshipTherapyComponent
  },
  {
    path: 'services/group',
    component: GroupPsychotherapyComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
