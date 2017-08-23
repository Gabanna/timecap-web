import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  date: Date = new Date();
  model: CalendarModel = new CalendarModel();

  constructor(public navCtrl: NavController) {

  }

}

class CalendarModel {
  date: Date = new Date();
  mode: CalendarMode = 'month';
}

type CalendarMode = 'month' | 'week' | 'day';
