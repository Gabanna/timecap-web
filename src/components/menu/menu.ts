import { MenuItem } from './../../model/menu.model';
import { HomePage } from './../../pages/home/home';
import { Component, Input } from '@angular/core';
import { Nav } from 'ionic-angular';

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
