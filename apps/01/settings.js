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

var SettingId = html.geturlparams('sid')

if (SettingId == '' || SettingId == undefined || SettingId == null) {
html.title('Settings - Home')
  
  html.h1('Settings' ,'Home - title')
  
  
  html.div('Home')
  html.append('Home - title', 'Home')
  
}

else if (SettingId >= 'Themes'  || settingId == '2' || settingId == undefined || settingId == null) {
html.title('Settings - Themes')
html.h1('Settings - Themes' ,'Themes')
  
}



// Could Not Find Setting + SettingID
else {
  
  html.title('Settings - Not Found')
  
  html.h1('Setting "' + settingId +Set Could Not Be Found' ,'ErrorMessage')
  
  
  html.div('Error')
  html.append('ErrorMessage', 'Error')
  
}