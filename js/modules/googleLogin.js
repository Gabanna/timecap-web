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

    function signIn() {
        window.auth2.signIn().then(function () {
            onSignIn(window.auth2.currentUser.get());
        });
    }

    function onSignIn(googleUser) {
        var md5 = require('js-md5');

        var profile = googleUser.getBasicProfile();

        var imageUrl = profile.getImageUrl();

        if (imageUrl) {
            var email = profile.getEmail();
            var emailHash = md5(email);
            imageUrl = 'https://www.gravatar.com/avatar/' + emailHash + '?d=retro';
        }

        var user = {
            id: profile.getId(),
            id_token: googleUser.getAuthResponse().id_token,
            fullName: profile.getName(),
            givenName: profile.getGivenName(),
            familyName: profile.getFamilyName(),
            imageUrl: imageUrl,
            email: email,
        };

        TimecapStorage.set('user', user);
        location.reload();
    }

    function onSignOut() {
        TimecapStorage.set('user', null);

        var auth2;

        if (gapi.auth2) {
            auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                location.reload();
            });

        } else {
            gapi.load('auth2', function () {
                auth2 = gapi.auth2.init({
                    client_id: '929754807802-tfihsuraa6ccvsh14badmg5ql3fbbp64.apps.googleusercontent.com',
                    fetch_basic_profile: false,
                    scope: 'profile'
                });

                auth2.
                        auth2.disconnect();
            });
        }
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
    GoogleLogin.signIn = signIn;
    GoogleLogin.onSignIn = onSignIn;
    GoogleLogin.getSignedInUser = getSignedInUser;
    GoogleLogin.renderLogin = renderLogin;
    GoogleLogin.renderUser = renderUser;
    GoogleLogin.onSignOut = onSignOut;
    return GoogleLogin;
})();
