import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';

import { NavItem } from './app.types';
import { Router } from '../../node_modules/@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  // sidenavIsOpen: boolean;
  // isSidenavOpen$: BehaviorSubject<boolean> = new BehaviorSubject(this.sidenavIsOpen);
  // sidenavSubscription$: Subscription = new Subscription();

  navItems: NavItem[] = [
    {
      displayName: 'Home',
      route: '/home'
    },
    {
      displayName: 'About',
      route: 'about'
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

  isSidenavOpen = false;
  watcher: Subscription = new Subscription();
  activeMediaQuery = '';
  sidenavMode = 'over';

  constructor(
    public media: ObservableMedia,
    private readonly router: Router
  ) {
    this.watcher = media
      .subscribe((change: MediaChange) => {
        if (change.mqAlias !== 'xs') {
          this.sidenavMode = 'side';
          this.isSidenavOpen = true;
        } else {
          this.sidenavMode = 'over';
          this.isSidenavOpen = false;
        }
      });
  }

  ngOnInit() {}

  ngOnDestroy() {}

  public changeRoute(path: string) {
    this.router.navigateByUrl(path)
      .then(
        () => {
          if (this.sidenavMode !== 'side') {
            this.isSidenavOpen = false;
          }
        }
      );
  }

  public resetSidenavOpened(event: any) {
    // console.log(event);
    // this.sidenavIsOpen = false;
  }

  public toggleMenu() {
    // this.sidenavIsOpenSubject.next(this.sidenavIsOpen = !this.sidenavIsOpen);
  }

}
