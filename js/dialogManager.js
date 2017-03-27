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

    var dialogOptions = {
        modal: true,
        width: 400,
        close: destroyDialog,
        buttons: {
            Speichern: function () {
                $('#dialogForm').submit();
            },
            Abbrechen: function () {
                $(this).dialog("close");
            }
        }
    };

    function showEditDialog(event) {
        var elementString = '<div class="dialog editElement" title="Eintrag bearbeiten" data-dates=\'' + JSON.stringify(event.data) + '\'></div>';

        var editElement = $(elementString);
        editElement.load('assets/fragments/editEventDialog.html', function () {
            editElement.dialog(dialogOptions);
        });
    }

    function showNewDialog(date) {
        var elementString;
        if (date && typeof date === Number) {
            elementString = '<div class="dialog newElement" title="neuer Eintrag" data-date="' + date.valueOf() + '"></div>';
        } else {
            elementString = '<div class="dialog newElement" title="neuer Eintrag"></div>';
        }

        var newElement = $(elementString);
        newElement.load('assets/fragments/newEventDialog.html', function () {
            newElement.dialog(dialogOptions);
        });
    }

    function destroyDialog() {
        $('.dialog').dialog('destroy');
        $('.xdsoft_datetimepicker ').remove();
    }

    DialogManager = {};
    DialogManager.showNewDialog = showNewDialog;
    DialogManager.showEditDialog = showEditDialog;
})();
