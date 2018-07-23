import { Component, ViewChild } from '@angular/core';
// import { MatButton } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';

import { NavItem } from './app.types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

  navItems: NavItem[] = [
    {
      displayName: 'Home',
      route: '/home'
    },
    {
      displayName: 'About',
      route: '/about'
    },
    {
      displayName: 'Background',
      route: '/background'
    },
    {
      displayName: 'Services',
      route: '/services'
    },
    {
      displayName: 'Location',
      route: '/location'
    },
    {
      displayName: 'Contact',
      route: '/contact'
    }
  ];

  constructor() {}

  public changeRoute(event: string) {

  }

  public toggleMenu(event: Event) {
    this.sidenav.open();
  }

}
