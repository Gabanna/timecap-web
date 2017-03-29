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

    var storageName = 'timecap';

    function getStorage() {
        var timecapStorage = sessionStorage.getItem(storageName);

        if (!timecapStorage) {
            timecapStorage = {};
            persistStorage(timecapStorage);

        } else {
            timecapStorage = JSON.parse(timecapStorage);
        }

        return timecapStorage;
    }

    function persistStorage(storage) {
        sessionStorage.setItem(storageName, JSON.stringify(storage));
    }

    function get(name) {
        return getStorage()[name];
    }

    function set(name, value) {
        var storage = getStorage();
        storage[name] = value;
        persistStorage(storage);
    }

    var TimecapStorage = {};
    TimecapStorage.get = get;
    TimecapStorage.set = set;
    return TimecapStorage;
})();
