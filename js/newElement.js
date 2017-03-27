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
$(document).ready(function () {
    'use strict';

    var dateFormatPicker = 'Y-m-d H:i';
    var dateFormat = 'YYYY-MM-DD HH:mm';

    Timecap.getLocationsForUser('ralphgallin@gmail.com')
            .done(function (data) {
                if (data) {
                    $('#location').autocomplete({
                        source: data
                    });
                    if (data.length === 1) {
                        $('#location').val(data[0]);
                    }
                }
            });

    var data = $('.newElement').data();
    if (data.date) {
        var date = moment.utc(data.date).format(dateFormat);
        $('#time').val(date);

    } else {
        $('#time').val(moment.utc().format(dateFormat));
    }

    $('#time').datetimepicker({
        format: dateFormatPicker
    });

    $('#userId').val('ralphgallin@gmail.com');

    $('#dialogForm').submit(function (event) {
        var time = moment.utc($('#time').val()).valueOf();
        var user = $('#userId').val();
        var location = $('#location').val();
        Timecap.newEvent(time, user, location);
    });
});