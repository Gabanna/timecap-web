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

module.exports = (function () {
    'use strict';

    function getEventsForUser(user, start, end) {
        return $.ajax({
            method: 'GET',
            url: 'http://localhost:3000/time-events?userId=' + user
        });
    }

    function newEvent(time, userId, location) {
        return $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/time-events',
            data: {
                "time": time,
                "userId": userId,
                "locationId": location
            }
        });
    }

    function getLocationsForUser(user) {
        return $.ajax({
            method: 'GET',
            url: 'http://localhost:3000/' + user + '/locations'
        });
    }

    function updateEvent(event) {
        return $.ajax({
            method: 'PUT',
            url: 'http://localhost:3000/time-events' + event.id,
            data: event
        });
    }

    var Timecap = {};
    Timecap.getEventsForUser = getEventsForUser;
    Timecap.newEvent = newEvent;
    Timecap.getLocationsForUser = getLocationsForUser;
    Timecap.updateEvent = updateEvent;
    return Timecap;
})();