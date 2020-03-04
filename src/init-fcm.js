import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
// Project Settings => Add Firebase to your web app
apiKey: "AIzaSyCr7tjGNODwimEiJox6c34DbaC05uoAwrs",
authDomain: "react-web-push.firebaseapp.com",
databaseURL: "https://react-web-push.firebaseio.com",
projectId: "react-web-push",
storageBucket: "react-web-push.appspot.com",
messagingSenderId: "381220402916",
appId: "1:381220402916:web:67b259e9776f3ae2105ef1",
measurementId: "G-NWC9LXVKVD"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
// Project Settings => Cloud Messaging => Web Push certificates
  "BOyk7CMbvYVAWJ68Er3bTxwpKuk7hR40nyM8RnGpTioky1OYMcMXd64BYUBG1zADxUE-sqQos0zDGFkZ5E52iXU"
);
export { messaging };