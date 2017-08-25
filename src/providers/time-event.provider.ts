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

  public getTimeEvents(startTime?: Date, endTime?: Date, user?: string): Observable<TimeEvent[]> {
    return Observable.create(observer => {
      observer.next([
        {
          "id": "590c1678-c850-4519-aa4a-b66143f0418d",
          "time": 1502820183947,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "2b5734aa-089c-49b5-9bb1-630238845e3d",
          "time": 1502820183963,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "fc608f70-d5bd-49b4-9742-56cf89ec955f",
          "time": 1502820183963,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "c05f004c-f4a9-488b-b6fc-9911477ab669",
          "time": 1502820183963,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "8f727f14-0fd4-44d4-84b3-b42a1d490b6b",
          "time": 1502820183963,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "0d17656c-6773-4db4-91f5-9c6fba3a7695",
          "time": 1502820183963,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "2aa14d36-6abb-4c26-b08f-dc3f459c71b1",
          "time": 1502820183963,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "708bda3a-4fb4-4b43-8dd0-54713b0cf4bd",
          "time": 1502820183964,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "7e170e9c-df07-4ccd-9ec3-972c5551798b",
          "time": 1502820183964,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "bc389600-1e3d-4be4-9f32-66cf5262c115",
          "time": 1502820183964,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "dbba1c3a-3bc5-43c6-bd0b-3acb490f56a0",
          "time": 1502820183964,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "7f1f26d8-d428-4cb9-a823-de315eac9367",
          "time": 1502820183964,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "c21d1bbe-b2a4-4a5e-aafe-38b2cb3f256c",
          "time": 1502820183965,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "1f162370-e2c8-4bbc-926e-49aadb9717bb",
          "time": 1502820183965,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "c17f3692-1ac6-41fb-b7de-7c2accf42633",
          "time": 1502820183965,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "d2925751-a10a-4970-9e3e-40e458bd6709",
          "time": 1502820183966,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "1686bca4-fafa-4cae-8890-bf0dd512c664",
          "time": 1502820183966,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "ba2ed443-893b-420f-8251-fea8565154e6",
          "time": 1502820183966,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "90f3618d-4be9-469d-a588-6a59bbf7558c",
          "time": 1502820183966,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "0d6dcd21-c430-4ed1-9953-32852bd1cf34",
          "time": 1502820183967,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "6a18be6b-581e-4153-8419-e68400199918",
          "time": 1502820183967,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "10a5f863-58b9-4daa-b28c-97cae129df07",
          "time": 1502820183967,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "632042f0-0612-4bd7-b022-86e1b8a30b75",
          "time": 1502820183967,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "cd31f9fa-78fd-4861-81c9-5f4ded651dca",
          "time": 1502820183968,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "43eea76d-d5b2-4407-864e-9b84c112af5f",
          "time": 1502820183968,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "c8d4a768-54aa-417d-8ed8-4b94bb6e7c21",
          "time": 1502820183968,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "5a0443e2-5b53-4fe9-9882-03f7cb11a8ef",
          "time": 1502820183968,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "e2802894-baf2-4c1c-ac11-e433fec8ac66",
          "time": 1502820183968,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "2b56acf8-46c7-48ee-bd13-db82f7d24a58",
          "time": 1502820183968,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "759c8190-7e84-4c05-99b9-929b2637d21d",
          "time": 1502820183969,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "22d879d1-fd47-4aab-b65e-787bf122d620",
          "time": 1502820183969,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },{
          "id": "2b56acf8-46c7-48ee-bd13-db82f7d24a51",
          "time": 1503648055000,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "759c8190-7e84-4c05-99b9-929b2637d211",
          "time": 1503662455000,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        },
        {
          "id": "22d879d1-fd47-4aab-b65e-787bf122d621",
          "time": 1503673255000,
          "userId": "ralphgallin@gmail.com",
          "locationId": "Skoda Zentrum Tegel"
        }
      ]);
      observer.complete();
    });
  }
}
