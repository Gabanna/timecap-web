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

/*global moment*/
module.exports = (function () {
    'use strict';

    function exportEnabled() {
        return document.queryCommandSupported('copy');
    }

    function copyToClipBoard() {
        return new Promise(function (resolve, reject) {
            var element = document.getElementById('tableId');
            var body = document.body, range, sel;
            if (document.createRange && window.getSelection) {
                range = document.createRange();
                sel = window.getSelection();
                sel.removeAllRanges();
                try {
                    range.selectNodeContents(element);
                    sel.addRange(range);
                } catch (e) {
                    range.selectNode(element);
                    sel.addRange(range);
                }
            } else if (body.createTextRange) {
                range = body.createTextRange();
                range.moveToElementText(element);
                range.select();
            }

            try {
                resolve(document.execCommand('copy'));
            } catch (err) {
                reject(err);

            } finally {
                if (window.getSelection) {
                    if (window.getSelection().empty) {  // Chrome
                        window.getSelection().empty();
                    } else if (window.getSelection().removeAllRanges) {  // Firefox
                        window.getSelection().removeAllRanges();
                    }
                } else if (document.selection) {  // IE?
                    document.selection.empty();
                }
            }
        });
    }

    function prepareTable(startDate, endDate) {
        var headerDate = $('<th>Datum</th>');
        var fromDate = $('<th>Start</th>');
        var toDate = $('<th>Ende</th>');
        var tr = $('<tr>');
        tr.append(headerDate);
        tr.append(fromDate);
        tr.append(toDate);
        var thead = $('<thead>');
        thead.append(tr);
        var tbody = $('<tbody class="tabelbody">');
        var iteratorDate = moment(startDate);
        while (iteratorDate.valueOf() < endDate.valueOf()) {
            var dateClm = $('<td>');
            dateClm.addClass('date');
            dateClm.html(iteratorDate.format('DD.MM ddd'));
            var fromClm = $('<td>');
            fromClm.addClass('from');
            var toClm = $('<td>');
            toClm.addClass('to');
            var row = $('<tr></tr>');
            row.addClass('dayOfMonth' + iteratorDate.format('DD'));
            row.addClass('dayOfWeek' + iteratorDate.day());
            row.append(dateClm);
            row.append(fromClm);
            row.append(toClm);
            tbody.append(row);
            iteratorDate = iteratorDate.add(1, 'days');
        }

        var table = $('<table id="tableId"></table>');
        table.append(tbody);
        return table;
    }

    function createTable(date, data) {
        return new Promise(function (resolve) {
            var startDate = moment(moment(date).format('YYYY-MM') + '-01');
            var endDate = moment(startDate).endOf('month');

            var table = prepareTable(startDate, endDate);

            data = data.sort(function (first, other) {
                return first.time - other.time;
            });

            var dateMap = {};
            data.forEach(function (element) {
                var date = moment.utc(parseInt(element.time));
                var dayKey = date.format('DD-MM-YYYY');
                var day = dateMap[dayKey];
                if (day) {
                    day.end = date;
                } else {
                    day = {
                        dayKey: day,
                        start: date
                    }
                    dateMap[dayKey] = day;
                }
            });

            for (var dayKey in dateMap) {
                if (dateMap.hasOwnProperty(dayKey)) {
                    var day = dateMap[dayKey];
                    var rowSelector = '.dayOfMonth' + day.start.format('DD');

                    var from = table.find(rowSelector + ' .from');
                    from.html(day.start.format('HH:mm'));

                    if (day.end) {
                        var to = table.find(rowSelector + ' .to');
                        to.html(day.end.format('HH:mm'));
                    }
                }
            }

            resolve(table);
        });
    }

    var Exporter = {};
    Exporter.createTable = createTable;
    Exporter.copyToClipBoard = copyToClipBoard;
    Exporter.exportEnabled = exportEnabled;
    return Exporter;
})();
