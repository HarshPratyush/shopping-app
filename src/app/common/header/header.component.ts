import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { AppConstants } from '../app-constants';

@Component({
  selector: 'altrooist-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  drawer:any
  constructor(public router:Router,private titleService:Title,private activatedRoute: ActivatedRoute) {  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => this.activatedRoute),
     map((route) => {
       while (route.firstChild) {
        route = route.firstChild;
        };
 
      return route;
     }),
      filter((route) => route.outlet === 'primary'),
    mergeMap((route) => route.data),
    ).subscribe((event) => this.titleService.setTitle(event['title']));
  }

  ngOnInit(): void {
    console.log(this.drawer);
  }
  postLogin(){
    let windows = window.open(AppConstants.OAUTH_LOGIN_URL,'New Window','top=70,left=500');
    windows.focus();
  }

}
