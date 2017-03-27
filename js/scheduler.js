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

/*global Exporter, DialogManager*/
(function () {

    require('./exporter.js');
    require('./dialogManager.js');

    function renderScheduler(loadDataCallback) {
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
            events: loadDataCallback,
            schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
            locale: 'de',
            timezone: 'UTC',
            defaultTimedEventDuration: '00:15:00',
            allDaySlot: false,
            minTime: '07:00:00',
            maxTime: '22:00:00',
            titleFormat: 'YYYY', 
            columnFormat: 'ddd DD.MM',
            weekNumbersWithinDays: true,
            hiddenDays: 3,
            eventClick: DialogManager.showEditDialog,
            dayClick: DialogManager.showNewDialog,
            customButtons: {
                newEvent: {
                    text: 'neuer Eintrag',
                    click: DialogManager.showNewDialog
                },
                export: {
                    text: 'Exportieren',
                    click: exportDates
                }
            },
            header: {
                left: 'prev,next today title',
                right: 'agendaWeek,month newEvent,export'
            }
        });
    }

    function exportDates() {
        var moment = $('.calendar').fullCalendar('getDate');
        Exporter.exportTable(moment);
    }

    Scheduler = {};
    Scheduler.renderScheduler = renderScheduler;
})();
