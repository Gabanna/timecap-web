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
module.exports = (function () {
    'use strict';

    var Exporter = require('./exporter.js');
    var DialogManager = require('./dialogManager.js');

    function renderScheduler(loadDataCallback) {
        $(window).resize(function () {
            var view = $('.calendar').fullCalendar('getView').name;
            var newView = $('body').width() < 780 ? 'agendaDay' : 'agendaWeek';

            if (newView !== view) {
                $('.calendar').fullCalendar('changeView', newView);
            }
        });

        var view = $('body').width() < 500 ? 'agendaDay' : 'agendaWeek';

        var rightHeader = 'agendaWeek,listMonth newEvent';
        if (Exporter.exportEnabled()) {
            rightHeader += ',export';
        }

        $('.calendar').fullCalendar({
            defaultView: view,
            events: onLoad,
            schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
            locale: 'de',
            defaultTimedEventDuration: '00:15:00',
            allDaySlot: false,
            minTime: '07:00:00',
            maxTime: '22:00:00',
            titleFormat: 'MMMM YYYY',
            nowIndicator: true,
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
                    click: onExport
                }
            },
            header: {
                left: 'prev,next today title',
                right: rightHeader
            }
        });

        function onLoad(start, end, timezone, callback) {
            loadDataCallback(start, end, timezone, function (data, events) {
                var moment = $('.calendar').fullCalendar('getDate');
                Exporter.createTable(moment, data).then(function (table) {
                    $('.export').html(table);
                });
                callback(events);
            });
        }

        function onExport() {
            Exporter.copyToClipBoard()
                    .then(function (result) {
                        if (result) {
                            $().toastmessage('showSuccessToast', 'Der aktuelle Monat wurde in die Zwischenablage kopiert');
                        
                        } else {
                            $().toastmessage('showWarningToast', 'Der aktuelle Monat konnte nicht in die Zwischenablage kopiert werden');
                        }
                    });
        }
    }

    var Scheduler = {};
    Scheduler.renderScheduler = renderScheduler;
    return Scheduler;
})();
