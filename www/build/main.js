webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.date = new Date();
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/gabanna/dev/timecap-web/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <time-events></time-events>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/gabanna/dev/timecap-web/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeEventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimeEventProvider = (function () {
    function TimeEventProvider(http) {
        this.http = http;
    }
    TimeEventProvider.prototype.getTimeEvents = function (startTime, endTime, user) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next([
                {
                    "id": "590c1678-c850-4519-aa4a-b66143f0418d",
                    "time": 1502820183947,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "2b5734aa-089c-49b5-9bb1-630238845e3d",
                    "time": 1502820183963,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "fc608f70-d5bd-49b4-9742-56cf89ec955f",
                    "time": 1502820183963,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "c05f004c-f4a9-488b-b6fc-9911477ab669",
                    "time": 1502820183963,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "8f727f14-0fd4-44d4-84b3-b42a1d490b6b",
                    "time": 1502820183963,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "0d17656c-6773-4db4-91f5-9c6fba3a7695",
                    "time": 1502820183963,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "2aa14d36-6abb-4c26-b08f-dc3f459c71b1",
                    "time": 1502820183963,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "708bda3a-4fb4-4b43-8dd0-54713b0cf4bd",
                    "time": 1502820183964,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "7e170e9c-df07-4ccd-9ec3-972c5551798b",
                    "time": 1502820183964,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "bc389600-1e3d-4be4-9f32-66cf5262c115",
                    "time": 1502820183964,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "dbba1c3a-3bc5-43c6-bd0b-3acb490f56a0",
                    "time": 1502820183964,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "7f1f26d8-d428-4cb9-a823-de315eac9367",
                    "time": 1502820183964,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "c21d1bbe-b2a4-4a5e-aafe-38b2cb3f256c",
                    "time": 1502820183965,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "1f162370-e2c8-4bbc-926e-49aadb9717bb",
                    "time": 1502820183965,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "c17f3692-1ac6-41fb-b7de-7c2accf42633",
                    "time": 1502820183965,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "d2925751-a10a-4970-9e3e-40e458bd6709",
                    "time": 1502820183966,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "1686bca4-fafa-4cae-8890-bf0dd512c664",
                    "time": 1502820183966,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "ba2ed443-893b-420f-8251-fea8565154e6",
                    "time": 1502820183966,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "90f3618d-4be9-469d-a588-6a59bbf7558c",
                    "time": 1502820183966,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "0d6dcd21-c430-4ed1-9953-32852bd1cf34",
                    "time": 1502820183967,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "6a18be6b-581e-4153-8419-e68400199918",
                    "time": 1502820183967,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "10a5f863-58b9-4daa-b28c-97cae129df07",
                    "time": 1502820183967,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "632042f0-0612-4bd7-b022-86e1b8a30b75",
                    "time": 1502820183967,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "cd31f9fa-78fd-4861-81c9-5f4ded651dca",
                    "time": 1502820183968,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "43eea76d-d5b2-4407-864e-9b84c112af5f",
                    "time": 1502820183968,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "c8d4a768-54aa-417d-8ed8-4b94bb6e7c21",
                    "time": 1502820183968,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "5a0443e2-5b53-4fe9-9882-03f7cb11a8ef",
                    "time": 1502820183968,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "e2802894-baf2-4c1c-ac11-e433fec8ac66",
                    "time": 1502820183968,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "2b56acf8-46c7-48ee-bd13-db82f7d24a58",
                    "time": 1502820183968,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "759c8190-7e84-4c05-99b9-929b2637d21d",
                    "time": 1502820183969,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "22d879d1-fd47-4aab-b65e-787bf122d620",
                    "time": 1502820183969,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                }, {
                    "id": "2b56acf8-46c7-48ee-bd13-db82f7d24a51",
                    "time": 1503648055000,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "759c8190-7e84-4c05-99b9-929b2637d211",
                    "time": 1503662455000,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                },
                {
                    "id": "22d879d1-fd47-4aab-b65e-787bf122d621",
                    "time": 1503673255000,
                    "userId": "ralphgallin@gmail.com",
                    "locationId": "Skoda Zentrum Tegel"
                }
            ]);
            observer.complete();
        });
    };
    return TimeEventProvider;
}());
TimeEventProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], TimeEventProvider);

//# sourceMappingURL=time-event.provider.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginSuccessful; });
/* unused harmony export loginFailed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logoutSuccessful; });
/* unused harmony export logoutFailed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_user_model__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var loginSuccessful = 'auth:login:successful';
var loginFailed = 'auth:login:failed';
var logoutSuccessful = 'auth:logout:successful';
var logoutFailed = 'auth:logout:failed';
var AuthProvider = (function () {
    function AuthProvider(
        // private afAuth: AngularFireAuth,
        events) {
        this.events = events;
    }
    AuthProvider.prototype.getUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create();
        //return this.afAuth.authState.map(user => this.mapUser(user));
    };
    AuthProvider.prototype.login = function () {
        /*
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(response => {
                this.events.publish(loginSuccessful, this.mapUser(response.user));
            })
            .catch(error => {
                console.error(error);
                this.events.publish(loginFailed, error);
            });*/
    };
    AuthProvider.prototype.logout = function () {
        /*
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
            */
    };
    AuthProvider.prototype.mapUser = function (user) {
        return __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.assign(new __WEBPACK_IMPORTED_MODULE_0__model_user_model__["a" /* User */](), user);
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* Events */]])
], AuthProvider);

//# sourceMappingURL=auth.provider.js.map

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 270;

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(333);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_time_events_time_events__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_provider__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_account_account__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_menu__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_calendar__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_time_event_provider__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_date_label_pipe__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { AngularFireAuth } from 'angularfire2/auth';












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* TimecapWebApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_3__components_menu_menu__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_2__components_account_account__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_0__components_time_events_time_events__["a" /* TimeEventsComponent */], __WEBPACK_IMPORTED_MODULE_14__pipes_date_label_pipe__["a" /* DateLabelPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* TimecapWebApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* TimecapWebApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["H" /* LOCALE_ID */], useValue: 'de-DE' },
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            //AngularFireAuth,
            __WEBPACK_IMPORTED_MODULE_13__providers_time_event_provider__["a" /* TimeEventProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_provider__["a" /* AuthProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event_source_model__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_time_event_provider__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimeEventsComponent = (function () {
    function TimeEventsComponent(timeEventProvider, loadingController) {
        this.timeEventProvider = timeEventProvider;
        this.loadingController = loadingController;
        this.calendarMode = 'month';
        this.currentDate = new Date();
        this.timeEvents = [];
        this.loadingOptions = {
            content: 'Zeiten werden geladen'
        };
        this.onTimeSelected = function (ev) {
            console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
        };
    }
    TimeEventsComponent.prototype.reload = function (ev) {
        var _this = this;
        var loading = this.loadingController.create(this.loadingOptions);
        loading.present();
        this.timeEventProvider.getTimeEvents(ev.startTime, ev.endTime).subscribe(function (events) {
            _this.timeEvents = _this.parseDates(events);
            loading.dismiss();
        });
    };
    TimeEventsComponent.prototype.toToday = function () {
        this.currentDate = new Date();
    };
    TimeEventsComponent.prototype.nextPage = function () {
        this.modifyDate(true);
    };
    TimeEventsComponent.prototype.previousPage = function () {
        this.modifyDate(false);
    };
    TimeEventsComponent.prototype.modifyDate = function (next) {
        var amount = next ? 1 : -1;
        var newDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()(this.currentDate);
        switch (this.calendarMode) {
            case 'day':
                newDate.add(amount, 'day');
                break;
            case 'week':
                newDate.add(amount, 'week');
                break;
            case 'month':
                newDate.add(amount, 'month');
                break;
        }
        this.currentDate = newDate.toDate();
    };
    TimeEventsComponent.prototype.parseDates = function (events) {
        var result = [];
        events.forEach(function (event) {
            if (result.length === 0) {
                var source = new __WEBPACK_IMPORTED_MODULE_0__model_event_source_model__["a" /* EventSource */]();
                source.title = event.locationId;
                source.startTime = __WEBPACK_IMPORTED_MODULE_4_moment___default.a.unix(event.time).toDate();
                source.endTime = __WEBPACK_IMPORTED_MODULE_4_moment___default.a.unix(event.time).toDate();
                result.push(source);
            }
            else {
                var lastEntry = result[result.length - 1];
                if (__WEBPACK_IMPORTED_MODULE_4_moment___default()(lastEntry.startTime).format('yyyy-MM-dd') === __WEBPACK_IMPORTED_MODULE_4_moment___default()(lastEntry.endTime).format('yyyy-MM-dd')) {
                    var source = new __WEBPACK_IMPORTED_MODULE_0__model_event_source_model__["a" /* EventSource */]();
                    source.title = event.locationId;
                    source.startTime = __WEBPACK_IMPORTED_MODULE_4_moment___default.a.unix(event.time).toDate();
                    source.endTime = __WEBPACK_IMPORTED_MODULE_4_moment___default.a.unix(event.time).toDate();
                    result.push(source);
                }
                else {
                    lastEntry.endTime = __WEBPACK_IMPORTED_MODULE_4_moment___default.a.unix(event.time).toDate();
                }
            }
        });
        return result;
    };
    TimeEventsComponent.prototype.isSameDay = function (event, source) {
        var eventMoment = __WEBPACK_IMPORTED_MODULE_4_moment___default.a.unix(event.time);
        var sourceMoment = __WEBPACK_IMPORTED_MODULE_4_moment___default()(source.startTime);
        return eventMoment.format('yyyy-MM-dd') === sourceMoment.format('yyyy-MM-dd');
    };
    return TimeEventsComponent;
}());
TimeEventsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'time-events',template:/*ion-inline-start:"/home/gabanna/dev/timecap-web/src/components/time-events/time-events.html"*/'<div>\n  <button ion-button (click)="calendarMode=\'month\'" [disabled]="calendarMode===\'month\'">Monat</button>\n  <button ion-button (click)="calendarMode=\'week\'" [disabled]="calendarMode===\'week\'">Woche</button>\n  <button ion-button (click)="calendarMode=\'day\'" [disabled]="calendarMode===\'day\'">Tag</button>\n  <button ion-button (click)="previousPage()">Zurück</button>\n  <button ion-button (click)="toToday()">Heute</button>\n  <button ion-button (click)="nextPage()">Weiter</button>\n  <p>{{currentDate | dateLabel:calendarMode}}</p>\n</div>\n<calendar step="30" [eventSource]="timeEvents" [currentDate]="currentDate" [calendarMode]="calendarMode" [startingDayWeek]="1" [startingDayMonth]="1"\n  (onTimeSelected)="onTimeSelected($event)" (onRangeChanged)="reload($event)" [queryMode]="\'remote\'"></calendar>'/*ion-inline-end:"/home/gabanna/dev/timecap-web/src/components/time-events/time-events.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_time_event_provider__["a" /* TimeEventProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_time_event_provider__["a" /* TimeEventProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */]) === "function" && _b || Object])
], TimeEventsComponent);

var _a, _b;
//# sourceMappingURL=time-events.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSource; });
/**
 * The calendar only watches for the eventSource reference for performance consideration.
 * That means only you manually reassign the eventSource value, the calendar gets notified, and this is usually fit to the scenario when the range is changed,
 * you load a new data set from the backend. In case you want to manually insert/remove/update the element in the eventSource array,
 * you can call instance method ‘loadEvents’ event to notify the calendar manually.
 */
var EventSource = (function () {
    function EventSource() {
    }
    return EventSource;
}());

//# sourceMappingURL=event-source.model.js.map

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 113,
	"./af.js": 113,
	"./ar": 114,
	"./ar-dz": 115,
	"./ar-dz.js": 115,
	"./ar-kw": 116,
	"./ar-kw.js": 116,
	"./ar-ly": 117,
	"./ar-ly.js": 117,
	"./ar-ma": 118,
	"./ar-ma.js": 118,
	"./ar-sa": 119,
	"./ar-sa.js": 119,
	"./ar-tn": 120,
	"./ar-tn.js": 120,
	"./ar.js": 114,
	"./az": 121,
	"./az.js": 121,
	"./be": 122,
	"./be.js": 122,
	"./bg": 123,
	"./bg.js": 123,
	"./bn": 124,
	"./bn.js": 124,
	"./bo": 125,
	"./bo.js": 125,
	"./br": 126,
	"./br.js": 126,
	"./bs": 127,
	"./bs.js": 127,
	"./ca": 128,
	"./ca.js": 128,
	"./cs": 129,
	"./cs.js": 129,
	"./cv": 130,
	"./cv.js": 130,
	"./cy": 131,
	"./cy.js": 131,
	"./da": 132,
	"./da.js": 132,
	"./de": 133,
	"./de-at": 134,
	"./de-at.js": 134,
	"./de-ch": 135,
	"./de-ch.js": 135,
	"./de.js": 133,
	"./dv": 136,
	"./dv.js": 136,
	"./el": 137,
	"./el.js": 137,
	"./en-au": 138,
	"./en-au.js": 138,
	"./en-ca": 139,
	"./en-ca.js": 139,
	"./en-gb": 140,
	"./en-gb.js": 140,
	"./en-ie": 141,
	"./en-ie.js": 141,
	"./en-nz": 142,
	"./en-nz.js": 142,
	"./eo": 143,
	"./eo.js": 143,
	"./es": 144,
	"./es-do": 145,
	"./es-do.js": 145,
	"./es.js": 144,
	"./et": 146,
	"./et.js": 146,
	"./eu": 147,
	"./eu.js": 147,
	"./fa": 148,
	"./fa.js": 148,
	"./fi": 149,
	"./fi.js": 149,
	"./fo": 150,
	"./fo.js": 150,
	"./fr": 151,
	"./fr-ca": 152,
	"./fr-ca.js": 152,
	"./fr-ch": 153,
	"./fr-ch.js": 153,
	"./fr.js": 151,
	"./fy": 154,
	"./fy.js": 154,
	"./gd": 155,
	"./gd.js": 155,
	"./gl": 156,
	"./gl.js": 156,
	"./gom-latn": 157,
	"./gom-latn.js": 157,
	"./he": 158,
	"./he.js": 158,
	"./hi": 159,
	"./hi.js": 159,
	"./hr": 160,
	"./hr.js": 160,
	"./hu": 161,
	"./hu.js": 161,
	"./hy-am": 162,
	"./hy-am.js": 162,
	"./id": 163,
	"./id.js": 163,
	"./is": 164,
	"./is.js": 164,
	"./it": 165,
	"./it.js": 165,
	"./ja": 166,
	"./ja.js": 166,
	"./jv": 167,
	"./jv.js": 167,
	"./ka": 168,
	"./ka.js": 168,
	"./kk": 169,
	"./kk.js": 169,
	"./km": 170,
	"./km.js": 170,
	"./kn": 171,
	"./kn.js": 171,
	"./ko": 172,
	"./ko.js": 172,
	"./ky": 173,
	"./ky.js": 173,
	"./lb": 174,
	"./lb.js": 174,
	"./lo": 175,
	"./lo.js": 175,
	"./lt": 176,
	"./lt.js": 176,
	"./lv": 177,
	"./lv.js": 177,
	"./me": 178,
	"./me.js": 178,
	"./mi": 179,
	"./mi.js": 179,
	"./mk": 180,
	"./mk.js": 180,
	"./ml": 181,
	"./ml.js": 181,
	"./mr": 182,
	"./mr.js": 182,
	"./ms": 183,
	"./ms-my": 184,
	"./ms-my.js": 184,
	"./ms.js": 183,
	"./my": 185,
	"./my.js": 185,
	"./nb": 186,
	"./nb.js": 186,
	"./ne": 187,
	"./ne.js": 187,
	"./nl": 188,
	"./nl-be": 189,
	"./nl-be.js": 189,
	"./nl.js": 188,
	"./nn": 190,
	"./nn.js": 190,
	"./pa-in": 191,
	"./pa-in.js": 191,
	"./pl": 192,
	"./pl.js": 192,
	"./pt": 193,
	"./pt-br": 194,
	"./pt-br.js": 194,
	"./pt.js": 193,
	"./ro": 195,
	"./ro.js": 195,
	"./ru": 196,
	"./ru.js": 196,
	"./sd": 197,
	"./sd.js": 197,
	"./se": 198,
	"./se.js": 198,
	"./si": 199,
	"./si.js": 199,
	"./sk": 200,
	"./sk.js": 200,
	"./sl": 201,
	"./sl.js": 201,
	"./sq": 202,
	"./sq.js": 202,
	"./sr": 203,
	"./sr-cyrl": 204,
	"./sr-cyrl.js": 204,
	"./sr.js": 203,
	"./ss": 205,
	"./ss.js": 205,
	"./sv": 206,
	"./sv.js": 206,
	"./sw": 207,
	"./sw.js": 207,
	"./ta": 208,
	"./ta.js": 208,
	"./te": 209,
	"./te.js": 209,
	"./tet": 210,
	"./tet.js": 210,
	"./th": 211,
	"./th.js": 211,
	"./tl-ph": 212,
	"./tl-ph.js": 212,
	"./tlh": 213,
	"./tlh.js": 213,
	"./tr": 214,
	"./tr.js": 214,
	"./tzl": 215,
	"./tzl.js": 215,
	"./tzm": 216,
	"./tzm-latn": 217,
	"./tzm-latn.js": 217,
	"./tzm.js": 216,
	"./uk": 218,
	"./uk.js": 218,
	"./ur": 219,
	"./ur.js": 219,
	"./uz": 220,
	"./uz-latn": 221,
	"./uz-latn.js": 221,
	"./uz.js": 220,
	"./vi": 222,
	"./vi.js": 222,
	"./x-pseudo": 223,
	"./x-pseudo.js": 223,
	"./yo": 224,
	"./yo.js": 224,
	"./zh-cn": 225,
	"./zh-cn.js": 225,
	"./zh-hk": 226,
	"./zh-hk.js": 226,
	"./zh-tw": 227,
	"./zh-tw.js": 227
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 338;

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.isAnonymous = true;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_provider__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(authProvider, events) {
        this.authProvider = authProvider;
        this.events = events;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_1__providers_auth_provider__["b" /* loginSuccessful */], function (user) { return _this.user = user; });
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_1__providers_auth_provider__["c" /* logoutSuccessful */], function (user) { return _this.user = user; });
        /*this.authProvider.getUser().subscribe(user => {
          this.user = user;
          console.info(this.user);
        });*/
    };
    AccountComponent.prototype.login = function () {
        this.authProvider.login();
    };
    AccountComponent.prototype.logout = function () {
        this.authProvider.logout();
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'account',template:/*ion-inline-start:"/home/gabanna/dev/timecap-web/src/components/account/account.html"*/'<section class="account">\n  <ng-container *ngIf="user && !user.isAnonymous">\n    <figure class="avatar">\n      <img src="{{user.photoURL}}">\n      <figcaption>\n        {{user.displayName}}\n        <a (click)="logout()"><ion-icon name="log-out" title="Abmelden"></ion-icon></a>\n      </figcaption>\n    </figure>\n  </ng-container>\n  <ng-container *ngIf="!user || user.isAnonymous">\n    kein user\n    <button ion-button (click)="login()"></button>\n  </ng-container>\n</section>'/*ion-inline-end:"/home/gabanna/dev/timecap-web/src/components/account/account.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_provider__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Events */]])
], AccountComponent);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent() {
        this.pages = [{
                title: 'Home',
                component: __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */]
            }];
    }
    MenuComponent.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return MenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */])
], MenuComponent.prototype, "nav", void 0);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'menu',template:/*ion-inline-start:"/home/gabanna/dev/timecap-web/src/components/menu/menu.html"*/'<header>\n  <account></account>\n</header>\n\n<ion-list>\n  <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n      {{p.title}}\n    </button>\n</ion-list>'/*ion-inline-end:"/home/gabanna/dev/timecap-web/src/components/menu/menu.html"*/
    })
], MenuComponent);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimecapWebApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimecapWebApp = (function () {
    function TimecapWebApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
    }
    TimecapWebApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    return TimecapWebApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], TimecapWebApp.prototype, "nav", void 0);
TimecapWebApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/gabanna/dev/timecap-web/src/app/app.html"*/'<ion-menu [content]="content">\n  <menu [nav]="nav"></menu>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/gabanna/dev/timecap-web/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], TimecapWebApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateLabelPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_locale_de__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_locale_de___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_locale_de__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



__WEBPACK_IMPORTED_MODULE_1_moment___default.a.locale('de');
var DateLabelPipe = (function () {
    function DateLabelPipe() {
    }
    DateLabelPipe.prototype.transform = function (date, calendarMode) {
        var result = 'not defined';
        var toFormat = __WEBPACK_IMPORTED_MODULE_1_moment___default()(date);
        switch (calendarMode) {
            case 'day':
                result = toFormat.format('DD. MMMM YYYY');
                break;
            case 'week':
                result = toFormat.format('ww. [KW] YYYY');
                break;
            case 'month':
                result = toFormat.format('MMMM YY');
                break;
        }
        return result;
    };
    return DateLabelPipe;
}());
DateLabelPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'dateLabel' })
], DateLabelPipe);

//# sourceMappingURL=date-label.pipe.js.map

/***/ })

},[314]);
//# sourceMappingURL=main.js.map