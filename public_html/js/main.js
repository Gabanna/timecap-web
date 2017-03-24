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


$(document).ready(function () {

    $(window).resize(function () {
        var view = $('.calendar').fullCalendar('getView').name;
        var newView = $('body').width() < 780 ? 'agendaDay' : 'agendaWeek';

        if (newView !== view) {
            $('.calendar').fullCalendar('changeView', newView);
        }
    });

    var view = $('body').width() < 500 ? 'agendaDay' : 'agendaWeek';

    $('.calendar').fullCalendar({
        defaultView: view,
        events: loadData,
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        locale: 'de',
        timezone: 'UTC',
        defaultTimedEventDuration: '00:15:00',
        allDaySlot: false,
        minTime: '07:00:00',
        maxTime: '22:00:00',
        weekNumbersWithinDays: true,
        hiddenDays: 3,
        eventClick: eventClick,
        dayClick: dayClick
    });


    function dayClick(date, jsEvent, view) {
        var locationId = prompt('Please enter the location');
        var event = {
            title: locationId,
            start: date
        };
        addEvent(event);
    }

    function eventClick(calEvent, jsEvent, view) {
        $('.detail').removeClass('hidden');
        $('.detail .date').html(printDate(calEvent));
        $('.detail .location').html(calEvent.data[0].locationId);
        $('.detail .from input').val(calEvent.start.format('HH:mm'));
        $('.detail .to input').val(calEvent.end ? calEvent.end.format('HH:mm') : null);
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
                var date = new Date(element.time);
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

    function addEvent(event) {
        Timecap.postEvent(event)
                .done(function (e) {
                    $('.calendar').fullCalendar('addEventSource', [createNewEvent(e)]);
                });
    }

    function dateEquals(event, date) {
        return event.start.getDate() === date.getDate()
                && event.start.getMonth() === date.getMonth()
                && event.start.getYear() === date.getYear();
    }

    function createNewEvent(data) {
        var date = new Date(data.time);
        var event = {};
        event.title = data.locationId;
        event.start = date;
        event.data = [data];
        return event;
    }

    function printDate(event) {
        var date = new Date(event.start);
        return date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
    }
});