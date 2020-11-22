import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app-constants';

@Component({
  selector: 'altrooist-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  drawer:any
  constructor(public router:Router) { }

  ngOnInit(): void {
    console.log(this.drawer);
  }
  postLogin(){
    let windows = window.open(AppConstants.OAUTH_LOGIN_URL,'New Window','top=70,left=500');
    windows.focus();
  }

}
