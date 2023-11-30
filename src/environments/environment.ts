// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyDpvc_IoZtvFP09J-6dkLhLrP58zxXL1xI",
    authDomain: "chat-ionic-dcc12.firebaseapp.com",
    projectId: "chat-ionic-dcc12",
    storageBucket: "chat-ionic-dcc12.appspot.com",
    messagingSenderId: "261460241805",
    appId: "1:261460241805:web:fa0f978e3b158dc422a1c4",
    measurementId: "G-PM9KRH941Q"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
