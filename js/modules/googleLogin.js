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

/*global GoogleLogin*/
module.exports = (function () {
    'use strict';

    var TimecapStorage = require('./timecapStorage.js');

    function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        var user = {
            id: profile.getId(),
            id_token: googleUser.getAuthResponse().id_token,
            fullName: profile.getName(),
            givenName: profile.getGivenName(),
            familyName: profile.getFamilyName(),
            imageUrl: profile.getImageUrl(),
            email: profile.getEmail(),
        };

        TimecapStorage.set('user', user);
        location.reload();
    }

    function getSignedInUser() {
        return TimecapStorage.get('user');
    }

    function renderLogin(selector) {
        $(selector).load('assets/fragments/login.html');
    }
    
    function renderUser() {
        $('.user').load('assets/fragments/user.html');
    }

    var GoogleLogin = {};
    GoogleLogin.onSignIn = onSignIn;
    GoogleLogin.getSignedInUser = getSignedInUser;
    GoogleLogin.renderLogin = renderLogin;
    GoogleLogin.renderUser = renderUser;
    return GoogleLogin;
})();
