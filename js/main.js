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

/*global moment, Scheduler, Timecap*/

moment = require('moment');
jQuery = $ = require('jquery');
require('../node_modules/jquery-ui-dist/jquery-ui.min.js');
require('fullcalendar');
require('fullcalendar-scheduler');
require('../node_modules/fullcalendar/dist/locale/de.js');

$(document).ready(function () {

    require('./scheduler.js');
    require('./timecap.js');

    function loadData(start, end, timezone, callback) {
        Timecap.getEventsForUser('ralphgallin@gmail.com', start.toDate(), end.toDate())
                .done(function (data) {
                    var events = parseToEvents(data);
                    callback(events);
                })
                .fail(function (err) {
                    console.error(err);
                });
    }

    function parseToEvents(data) {
        var result = [];
        data.sort(function (a, b) {
            return a.time - b.time;
        });
        var currentEvent;
        data.forEach(function (element) {
            if (!currentEvent) {
                currentEvent = createNewEvent(element);
                result.push(currentEvent);
            } else {
                var date = moment.utc(parseInt(element.time));
                if (dateEquals(currentEvent, date)) {
                    if (element.locationId !== currentEvent.title) {
                        currentEvent.title += ' - ' + element.locationId;
                    }
                    currentEvent.end = date;
                    currentEvent.data.push(element);
                    currentEvent = null;
                } else {
                    currentEvent = createNewEvent(element);
                    result.push(currentEvent);
                }
            }
        });
        return result;
    }

    function dateEquals(event, date) {
        return event.start.format('DD-MM-YYYY') === date.format('DD-MM-YYYY');
    }

    function createNewEvent(data) {
        var date = moment.utc(parseInt(data.time));
        var event = {};
        event.title = data.locationId;
        event.start = date;
        event.data = [data];
        return event;
    }

    Scheduler.renderScheduler(loadData);
});