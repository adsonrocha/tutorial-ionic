import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatPage } from "../pages/chat/chat";
import { LoginPage } from "../pages/login/login";
import {AngularFireModule} from "angularfire2";
import {UploadPage} from "../pages/upload/upload";

export const firebaseConfig = {
  apiKey: "AIzaSyB4IUvYLpLU2oO12SdmAZnjbhD9Dj0-lNI",
  authDomain: "tutorial-11ef3.firebaseapp.com",
  databaseURL: "https://tutorial-11ef3.firebaseio.com",
  storageBucket: "tutorial-11ef3.appspot.com",
  messagingSenderId: "851449183424"
};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    ChatPage,
    LoginPage,
    UploadPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    ChatPage,
    LoginPage,
    UploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
