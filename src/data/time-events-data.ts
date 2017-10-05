import {TimeEvent} from '../model/time-event.model';
const timeEventsData : Array<TimeEvent> = [
    {
        id: ',jhblu',
        time: new Date().getTime(),
        userId: 'auser',
        locationId: 'aLocation'
    },
    {
        id: 'fjztfjztfjktzfjg',
        time: new Date().getTime() + (1000 * 60),
        userId: 'auser',
        locationId: 'aLocation'
    },{
        id: 'jzlzg',
        time: new Date().getTime() + (1000 * 60 *2),
        userId: 'auser',
        locationId: 'aLocation'
    },{
        id: 'zjkufzkufz',
        time: new Date().getTime() + (1000 * 60 *3),
        userId: 'auser',
        locationId: 'aLocation'
    }
];

export default timeEventsData;