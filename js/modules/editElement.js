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

/*global Timecap,moment*/
module.exports = (function () {
    'use strict';

    function init() {

        var dateFormatPicker = 'Y-m-d H:i';
        var dateFormat = 'YYYY-MM-DD HH:mm';

        var dates = $('.editElement').data().dates;
        if (dates) {
            var date = moment.utc(parseInt(dates[0].time)).format(dateFormat);
            $('.time.start').val(date);
            $('.location.start').val(dates[0].locationId);

            if (dates.length > 1) {
                date = moment.utc(parseInt(dates[1].time)).format(dateFormat);
                $('.time.end').val(date);
                $('.location.end').val(dates[1].locationId);

            } else {
                $('.end').hide();
            }
        }

        $('.time').datetimepicker({
            format: dateFormatPicker
        });

        $('#userId').val(TimecapStorage.get('user').email);

        $('#dialogForm').submit(function () {
            var event_start = dates[0];
            event_start.time = moment.utc($('.time.start')).valueOf();

            if (JSON.stringify(event_start) !== JSON.stringify(dates[0])) {
                Timecap.updateEvent(event_start);
            }

            if (dates.length > 1) {
                var event_end = dates[1];
                event_end.time = moment.utc($('.time.end')).valueOf();

                if (JSON.stringify(event_end) !== JSON.stringify(dates[1])) {
                    Timecap.updateEvent(event_end);
                }
            }
        });
    }
    
    var EditElement = {};
    EditElement.init = init;
    return EditElement;
})();