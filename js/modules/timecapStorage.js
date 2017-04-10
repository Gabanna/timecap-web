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

    var prefix = 'timecap:';

    function get(name) {
        var result = sessionStorage.getItem(prefix + name);
        if (!result) {
            result = localStorage.getItem(prefix + name);
        }

        if(result) {
            result = JSON.parse(result);
        }

        return result;
    }

    function set(name, value) {
        sessionStorage.setItem(prefix + name, JSON.stringify(value));
    }

    function remove(name) {
        sessionStorage.removeItem(prefix + name);
        localStorage.removeItem(prefix + name);
    }

    function persist(name, value) {
        var v = value;

        if (v === undefined) {
            v = sessionStorage.getItem(prefix + name);
        }

        if (v !== undefined) {
            localStorage.setItem(prefix + name, v);
        }
    }

    function isPersistent(name) {
        var entry = localStorage.getItem(prefix + name);
        return entry !== null && entry !== undefined;
    }

    var TimecapStorage = {};
    TimecapStorage.get = get;
    TimecapStorage.set = set;
    TimecapStorage.remove = remove;
    TimecapStorage.persist = persist;
    TimecapStorage.isPersistent = isPersistent;
    return TimecapStorage;
})();