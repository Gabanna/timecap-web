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
(function () {

    function exportTable(date) {
        var startDate = moment(moment(date).format('YYYY-MM') + '-01');
        var endDate = moment(startDate).endOf('month');

        debugger;

        var table = prepareTable(startDate, endDate);
        
        $('body').append(table);
        
        var element = table[0];
        
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
        var success = document.execCommand("copy");
        if (success) {
            alert('Die Tabelle wurde in die Zwischenablage kopiert.');
        } else {
            alert('Die Tabelle konnte nicht in die Zwischenablage kopiert werden.');
        }
        
        table.remove();
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

        iteratorDate = moment(startDate);
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

    Exporter = {};
    Exporter.exportTable = exportTable;
})();
