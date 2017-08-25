import { EventSource } from './../../model/event-source.model';
import { TimeEvent } from './../../model/time-event.model';
import { TimeEventProvider } from './../../providers/time-event.provider';
import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'time-events',
  templateUrl: 'time-events.html'
})
export class TimeEventsComponent {

  calendarMode: CalendarMode = 'month';
  currentDate: Date = new Date();
  timeEvents: EventSource[] = [];

  constructor(
    private timeEventProvider: TimeEventProvider
  ) { }

  onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
  };

  reload(ev: { startTime: Date, endTime: Date }) {
    this.timeEventProvider.getTimeEvents().subscribe(events => this.timeEvents = this.parseDates(events));
  }

  parseDates(events: TimeEvent[]): EventSource[] {
    let result: EventSource[] = [];

    events.forEach(event => {
      if (result.length === 0) {
        let source = new EventSource();
        source.title = event.locationId;
        source.startTime = moment.unix(event.time).toDate();
        source.endTime = moment.unix(event.time).toDate();

        result.push(source);

      } else {
        let lastEntry = result[result.length - 1];

        if (moment(lastEntry.startTime).format('yyyy-MM-dd') === moment(lastEntry.endTime).format('yyyy-MM-dd')) {
          let source = new EventSource();
          source.title = event.locationId;
          source.startTime = moment.unix(event.time).toDate();
          source.endTime = moment.unix(event.time).toDate();
          result.push(source);

        } else {
          lastEntry.endTime = moment.unix(event.time).toDate();
        }
      }
    });

    return result;
  }

  private isSameDay(event: TimeEvent, source: EventSource): boolean {
    let eventMoment = moment.unix(event.time);
    let sourceMoment = moment(source.startTime);

    return eventMoment.format('yyyy-MM-dd') === sourceMoment.format('yyyy-MM-dd');
  }
}

type CalendarMode = 'month' | 'week' | 'day';
