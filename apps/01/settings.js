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

let SettingId = html.geturlparams('sid')
let roomcode = html.geturlparams('code')

let url = 'https://' + document.domain + '/apps/?code=' + roomcode

html.button('Back to chat', url + '&id=0')
html.button('Home', url + '&sid=1&id=1')
html.button('Themes', url + '&sid=2&id=1')
html.button('Account', url + '&sid=3&id=1')

//Home
if (SettingId == '1') {
html.title('Settings - Home')
  
  html.h1('Settings' ,'Hometitle')
  
  
  html.div('Home')
  html.append('Hometitle', 'Home')
  
}



// Themes
else if (SettingId == '2') {
html.title('Settings - Themes')
html.h1('Settings - Themes' ,'Themestitle')
  
  
  html.div('Themes')
  html.append('Themestitle', 'Themes')
}



// Account
else if (SettingId == '3') {
html.title('Settings - Account')
html.h1('Settings - Account' ,'acctitle')
  
  html.h4('Name' ,'acc-name-title')
  html.input_text('', 'Name' , 'acc-name')
    html.h4('Profile Picture' ,'acc-pfp-title')
  html.input_file('acc-pfp')
  html.buttononclick('Update Account', )
   html.div('acc')
  html.append('acctitle', 'acc')
  html.append('acc-name-title', 'acc')
  html.append('acc-name', 'acc')
  html.append('acc-pfp-title', 'acc')
  html.append('acc-pfp', 'acc')
}





// Could Not Find Setting + SettingID
else {
  
  html.title('Settings - Not Found')
  
  html.h1('Setting "' + SettingId + '" Could Not Be Found' ,'ErrorMessage')
  
  
  html.div('Error')
  html.append('ErrorMessage', 'Error')
  
}