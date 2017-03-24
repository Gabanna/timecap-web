/* 
 * Copyright (C) 2017 Ronny Gallin <ronny.gallin@rg-software.one>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function () {

    function getEventsForUser(user, start, end) {
        /*return $.ajax({
         method: 'GET',
         url: 'http://timecap-rgse.rhcloud.com/time-events?userId=' + user
         });*/
        var defered = $.Deferred();

        var events = [
            {
                "id": "43eea76d-d5b2-4407-864e-9b84c112af5f",
                "time": 1490262078000,
                "instant": null,
                "userId": "ralphgallin@gmail.com",
                "locationId": "Skoda Zentrum Tegel 0"
            },
            {
                "id": "c8d4a768-54aa-417d-8ed8-4b94bb6e7c21",
                "time": 1490209399000,
                "instant": null,
                "userId": "ralphgallin@gmail.com",
                "locationId": "Skoda Zentrum Tegel 1"
            },
            {
                "id": "5a0443e2-5b53-4fe9-9882-03f7cb11a8ef",
                "time": 1490192592000,
                "instant": null,
                "userId": "ralphgallin@gmail.com",
                "locationId": "Skoda Zentrum Tegel 22"
            },
            {
                "id": "5a0443e2-5b53-4fe9-9882-03f7cb11a8ef",
                "time": 1490182592000,
                "instant": null,
                "userId": "ralphgallin@gmail.com",
                "locationId": "Skoda Zentrum Tegel 2"
            },
            {
                "id": "5a0443e2-5b53-4fe9-9882-03f7cb11a8ef",
                "time": 1490172592000,
                "instant": null,
                "userId": "ralphgallin@gmail.com",
                "locationId": "Skoda Zentrum Tegel 21"
            },
            {
                "id": "e2802894-baf2-4c1c-ac11-e433fec8ac66",
                "time": 1488616926000,
                "instant": null,
                "userId": "ralphgallin@gmail.com",
                "locationId": "Skoda Zentrum Tegel 3"
            },
            {
                "id": "2b56acf8-46c7-48ee-bd13-db82f7d24a58",
                "time": 1488530354000,
                "instant": null,
                "userId": "ralphgallin@gmail.com",
                "locationId": "Skoda Zentrum Tegel 4"
            },
            {
                "id": "759c8190-7e84-4c05-99b9-929b2637d21d",
                "time": 1488530352000,
                "instant": null,
                "userId": "ralphgallin@gmail.com",
                "locationId": "Skoda Zentrum Tegel 5"
            },
            {
                "id": "22d879d1-fd47-4aab-b65e-787bf122d620",
                "time": 1488444266000,
                "instant": null,
                "userId": "ralphgallin@gmail.com",
                "locationId": "Skoda Zentrum Tegel 6"
            }
        ];

        setTimeout(function () {
            defered.resolve(events);
        }, 500);
        return defered.promise();
    }

    function postEvent(event) {
        var deferred = $.Deferred();

        setTimeout(function () {
            deferred.resolve({
                "id": "22d879d1-fd47-4aab-b65e-787bf122d620",
                "time": event.start.valueOf(),
                "userId": "ralphgallin@gmail.com",
                "locationId": event.title
            });
        }, 500);

        return deferred.promise();
    }

    Timecap = {};
    Timecap.getEventsForUser = getEventsForUser;
    Timecap.postEvent = postEvent;
})();
