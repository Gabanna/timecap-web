/**
 * The calendar only watches for the eventSource reference for performance consideration.
 * That means only you manually reassign the eventSource value, the calendar gets notified, and this is usually fit to the scenario when the range is changed,
 * you load a new data set from the backend. In case you want to manually insert/remove/update the element in the eventSource array,
 * you can call instance method ‘loadEvents’ event to notify the calendar manually.
 */
export class EventSource {

    title: string;

    /**
     * If allDay is set to true, the startTime has to be as a UTC date which time is set to 0:00 AM, because in an allDay event, only the date is considered, the exact time or timezone doesn't matter.
     * For example, if an allDay event starting from 2014-05-09, then startTime is
     *
     * var startTime = new Date(Date.UTC(2014, 4, 8));
     */
    startTime: Date;

    /**
     * If allDay is set to true, the startTime has to be as a UTC date which time is set to 0:00 AM, because in an allDay event, only the date is considered, the exact time or timezone doesn't matter.
     * For example, if an allDay event ending to 2014- 05 - 10, then endTime is
     *
     * var endTime = new Date(Date.UTC(2014, 4, 9));
     */
    endTime: Date;

    /**
     * Indicates the event is allDay event or regular event
     */
    allDay: boolean;
}