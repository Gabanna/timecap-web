import { TimeEvent } from './../../model/time-event.model';
import { TimeEventProvider } from './../../providers/time-event.provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time-events',
  templateUrl: 'time-events.html'
})
export class TimeEventsComponent implements OnInit {

  timeEvents: TimeEvent[] = [];

  constructor(
    private timeEventProvider: TimeEventProvider
  ) { }
  
  ngOnInit() {
    this.timeEventProvider.getTimeEvents().subscribe(events => this.timeEvents = events);
  }
}
