import { LocationComponent } from './components/location/location.component';
import { ContactComponent } from './components/contact/contact.component';
import { BackgroundComponent } from './components/background/background.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';

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
    component: ServicesComponent
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
