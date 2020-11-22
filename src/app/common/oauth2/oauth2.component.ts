import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppConstants} from '../app-constants';

@Component({
  selector: 'altrooist-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.scss']
})
export class Oauth2Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    const token = this.getUrlParameter(AppConstants.TOKEN_CONSTANT);
    const error = this.getUrlParameter(AppConstants.ERROR);
    if(token) {
      localStorage.setItem(AppConstants.ACCESS_TOKEN, token);
      window.close();
  } else {
      window.close(); 
  }
  }

  getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    let results = regex.exec(this.router.url);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

}
