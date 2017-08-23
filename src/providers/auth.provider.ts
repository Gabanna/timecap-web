import { User } from './../model/user.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import _ from 'lodash';

export const loginSuccessful = 'auth:login:successful';
export const loginFailed = 'auth:login:failed';
export const logoutSuccessful = 'auth:logout:successful';
export const logoutFailed = 'auth:logout:failed';

@Injectable()
export class AuthProvider {


    constructor(
        private afAuth: AngularFireAuth,
        private events: Events
    ) { }

    getUser(): Observable<User> {
        return this.afAuth.authState.map(user => this.mapUser(user));
    }

    login(): void {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(response => {
                console.info(response.user);
                this.events.publish(loginSuccessful, this.mapUser(response.user));
            })
            .catch(error => {
                this.events.publish(loginFailed, error);
            });
    }

    logout(): void {
        this.afAuth.auth.signOut()
            .then(() => {
                this.getUser().subscribe(user => {
                    this.events.publish(logoutSuccessful, user);
                });
            })
            .catch(error => {
                console.error(error);
                this.events.publish(logoutFailed, error);
            });
    }

    private mapUser(user: firebase.User): User {
        return _.assign(new User(), user);
    }
}
