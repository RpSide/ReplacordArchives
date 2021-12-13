import { html } from 'https://replacord.glitch.me/libraies/BetterDOM.js'

// Your web app's Firebase configuration
var firebaseConfig = {
 apiKey: "AIzaSyCF46UDRHhke3cHfUFOZ3YNcq9EJWdC10Y",
  authDomain: "chat-883eb.firebaseapp.com",
  databaseURL: "https://chat-883eb-default-rtdb.firebaseio.com",
  projectId: "chat-883eb",
  storageBucket: "chat-883eb.appspot.com",
  messagingSenderId: "421817736954",
  appId: "1:421817736954:web:32ac95e1f698ea3ff0f343",
  measurementId: "G-YCQZGGEGZ9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var settingId = html.geturlparams('sid')

html.div('Home')
html.h1('Settings' ,'Home - title')

if (settingId == '' || settingId == undefined || settingId == null) {
html.title('Settings - Home')
  
  
}

if (settingId >= 'Themes'  || settingId == '2' || settingId == undefined || settingId == null) {
html.title('Settings - Themes')
html.h1('Settings - Themes' ,'Themes')
  
}