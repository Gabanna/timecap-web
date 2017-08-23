import { TimeEvent } from './../../model/time-event.model';
import { TimeEventProvider } from './../../providers/time-event.provider';
import { Component } from '@angular/core';

@Component({
  selector: 'time-events',
  templateUrl: 'time-events.html'
})
export class TimeEventsComponent {

  timeEvents: TimeEvent[] = [];

  constructor(
    private timeEventProvider: TimeEventProvider
  ) {
    timeEventProvider.getTimeEvents().subscribe(events => this.timeEvents = events);
  }

}
