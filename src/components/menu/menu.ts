import { AuthProvider } from './../../providers/auth.provider';
import { MenuItem } from './../../model/menu.model';
import { HomePage } from './../../pages/home/home';
import { Component, Input, OnInit } from '@angular/core';
import { Nav } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  @Input()
  private nav: Nav;

  pages: MenuItem[] = [{
    title: 'Home',
    component: HomePage
  }];

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
