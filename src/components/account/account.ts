import { Events } from 'ionic-angular';
import { User } from './../../model/user.model';
import { AuthProvider, loginSuccessful, logoutSuccessful } from './../../providers/auth.provider';
import { Component } from '@angular/core';

@Component({
  selector: 'account',
  templateUrl: 'account.html'
})
export class AccountComponent {

  private user: User;

  constructor(
    private authProvider: AuthProvider,
    private events: Events
  ) {
    events.subscribe(loginSuccessful, user => this.user = user);
    events.subscribe(logoutSuccessful, user => this.user = user);
    authProvider.getUser().subscribe(user => {
      this.user = user;
      console.info(this.user);
    });
  }

  login() {
    this.authProvider.login();
  }

  logout() {
    this.authProvider.logout();
  }
}
