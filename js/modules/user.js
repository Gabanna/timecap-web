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
        var GoogleLogin = require('./googleLogin');
        var TimecapStorage = require('./timecapStorage');
        var user = TimecapStorage.get('user');

        $('.avatar > img').attr('src', user.imageUrl);
        $('.username').html(user.email);

        $('.avatar').click(function () {
            $('.container').slideToggle("slow", function () {
            });
        });

        var btn = $('.rememberLogin');
        if (TimecapStorage.isPersistent('user')) {
            btn.click(function () {
                TimecapStorage.persist('user', null);
                GoogleLogin.renderUser();
            });
            btn.val('Anmeldung löschen');
            
        } else {
            btn.click(function () {
                TimecapStorage.persist('user');
                GoogleLogin.renderUser();
            });
            btn.val('Anmeldung speichern');
        }
        
        $('.logout').click(function() {
            GoogleLogin.onSignOut();
        });
    }

    var User = {};
    User.init = init;
    return User;
})();