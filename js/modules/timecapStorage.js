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

    function getLocalStorage() {
        var timecapStorage = localStorage.getItem(storageName);

        if (!timecapStorage) {
            timecapStorage = {};
            persistLocalStorage(timecapStorage);

        } else {
            timecapStorage = JSON.parse(timecapStorage);
        }

        return timecapStorage;
    }

    function getSessionStorage() {
        var timecapStorage = sessionStorage.getItem(storageName);

        if (!timecapStorage) {
            timecapStorage = {};
            persistSessionStorage(timecapStorage);

        } else {
            timecapStorage = JSON.parse(timecapStorage);
        }

        return timecapStorage;
    }

    function persistLocalStorage(storage) {
        localStorage.setItem(storageName, JSON.stringify(storage));
    }

    function persistSessionStorage(storage) {
        sessionStorage.setItem(storageName, JSON.stringify(storage));
    }

    function get(name) {
        var result = getSessionStorage()[name];
        if (!result) {
            result = getLocalStorage()[name];
        }
        return result;
    }

    function set(name, value) {
        var storage = getSessionStorage();
        storage[name] = value;
        persistSessionStorage(storage);
    }

    function persist(name, value) {
        var v = value;
        
        if (v === undefined) {
            v = getSessionStorage()[name];
        }

        if (v !== undefined) {
            var storage = getLocalStorage();
            storage[name] = v;
            persistLocalStorage(storage);
        }
    }

    function isPersistent(name) {
        var entry = getLocalStorage()[name];
        return  entry !== null && entry !== undefined;
    }

    var TimecapStorage = {};
    TimecapStorage.get = get;
    TimecapStorage.set = set;
    TimecapStorage.persist = persist;
    TimecapStorage.isPersistent = isPersistent;
    return TimecapStorage;
})();
