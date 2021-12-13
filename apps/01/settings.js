import { html } from 'https://replacord.glitch.me/libraies/BetterDOM.js'

// Your web app's Firebase configuration
let firebaseConfig = {
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
let roomcode = html.geturlparams('code')

let url = 'https://' + document.domain + '/apps/?id=0&code=' + roomcode

html.button('Back to chat', url)

//Home
if (SettingId == '' || SettingId >= 'Home' || SettingId == '1' || SettingId == undefined || SettingId == null) {
html.title('Settings - Home')
  
  html.h1('Settings' ,'Home - title')
  
  
  html.div('Home')
  html.append('Home - title', 'Home')
  
}



// Themes
else if (SettingId >= 'Themes'  || SettingId == '2' || SettingId != undefined || SettingId != null) {
html.title('Settings - Themes')
html.h1('Settings - Themes' ,'Themes - title')
  
  
  html.div('Themes')
  html.append('Themes - title', 'Themes')
}



// Account
else if (SettingId >= 'account'  || SettingId == '3' || SettingId != undefined || SettingId != null) {
html.title('Settings - Account')
html.h1('Settings - Account' ,'acc - title')
  
   html.div('acc')
  html.append('acc - title', 'acc')
}





// Could Not Find Setting + SettingID
else {
  
  html.title('Settings - Not Found')
  
  html.h1('Setting "' + SettingId + '" Could Not Be Found' ,'ErrorMessage')
  
  
  html.div('Error')
  html.append('ErrorMessage', 'Error')
  
}