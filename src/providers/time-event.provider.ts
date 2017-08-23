import { Observable } from 'rxjs/Observable';
import { TimeEvent } from './../model/time-event.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimeEventProvider {

  constructor(
    private http: Http
  ) { }

  public getTimeEvents(user?: string): Observable<TimeEvent[]> {
    return this.http.get('url').map(response => response.json());
  }
}
