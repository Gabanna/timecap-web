import { AuthProvider } from './../providers/auth.provider';
import { AccountComponent } from './../components/account/account';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuComponent } from './../components/menu/menu';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { TimecapWebApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NgCalendarModule  } from 'ionic2-calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TimeEventProvider } from '../providers/time-event.provider';

import { AngularFireModule } from 'angularfire2';

import firebaseConfig from '../config/firebase.conf';

@NgModule({
  declarations: [
    TimecapWebApp,
    HomePage,
    MenuComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(TimecapWebApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TimecapWebApp,
    HomePage,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    TimeEventProvider,
    AuthProvider
  ]
})
export class AppModule {}
