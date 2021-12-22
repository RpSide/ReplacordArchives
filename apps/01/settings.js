import { html } from 'https://cdn-cdn.glitch.me/libraies/BetterDOMjs.js'



 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyASAhqjDqjMvxmAUZPBvdbfnO-fVh7Wsh0",
    authDomain: "replacord.firebaseapp.com",
    databaseURL: "https://replacord-default-rtdb.firebaseio.com",
    projectId: "replacord",
    storageBucket: "replacord.appspot.com",
    messagingSenderId: "811577852329",
    appId: "1:811577852329:web:017b860343f8ebbf9084b8",
    measurementId: "G-K73TLX6YDJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
var db = firebase.firestore();

let SettingId = html.geturlparams('sid')
let roomcode = html.geturlparams('code')
let ThemeLab = html.geturlparams('thlb')

let normalurl = 'https://' + document.domain + '/apps/?code=' + roomcode


function createnavbar(){
html.button('Back to chat', normalurl + '&id=0')
html.button('Home', normalurl + '&sid=1&id=1')
html.button('Themes', normalurl + '&sid=2&id=1')
html.button('Account', normalurl + '&sid=3&id=1')
html.button('tst', normalurl + '&sid=4&id=1')
}

//Home
if (SettingId == '1') {
  html.newdoc()
  createnavbar()
  
html.title('Settings - Home')
  
  html.h1('Settings' ,'Hometitle')
  
  
  html.div('Home')
  html.append('Hometitle', 'Home')
}



// Themes
else if (SettingId == '2') {
  html.newdoc()
  createnavbar()
  
html.title('Settings - Themes')
html.h1('Settings - Themes' ,'Themestitle')
  html.button('Themes Lab', normalurl + '&sid=2&id=1&thlb=true', 'lab')
  
  html.div('Themes')
  html.append('Themestitle', 'Themes')
  html.append('lab', 'Themes')
  
  if (ThemeLab == 'true') {
    html.newdoc()
  createnavbar()
    
html.title('Themes - Lab')
html.h1('Themes - Lab' ,'ThemeLabTitle')
  
    html.h3('Background', 'colortitle1')
  html.input_color('#525252', 'bg-color')
    
    html.h3('Title & Subtitle', 'colortitle2')
  html.input_color('#ffffff', 'title-color')
    
  html.div('Themes-lab')
  html.append('ThemeLabTitle', 'Themes-lab')
    html.append('colortitle1', 'Themes-lab')
    
    html.append('bg-color', 'Themes-lab')
        html.append('colortitle2', 'Themes-lab')
    
    html.append('title-color', 'Themes-lab')
}
}



// Account
else if (SettingId == '3') {
  html.newdoc()
  createnavbar()
  
html.title('Settings - Account')
html.h1('Settings - Account' ,'acctitle')
  
  //name
  var username = localStorage.getItem('name')
  html.h4('Name' ,'acc-name-title')
  html.input_text('', username, '15',  'acc-name')
  html.h1('', 'Update-name-cont')
  html.buttononclick('Update Account Name', "", 'Update-name')
  //pfp
    html.h4('Profile Picture' ,'acc-pfp-title')
  html.input_file('acc-pfp')
  html.progress('0', '100', 'pfpprog')
  
  html.div('acc')
  
  
  
  // name
  html.append('acctitle', 'acc')
  html.append('acc-name-title', 'acc')
  html.append('acc-name', 'acc')
  html.append('Update-name', 'Update-name-cont')
  html.append('Update-name-cont', 'acc')
  
  //pfp
  html.append('acc-pfp-title', 'acc')
  html.append('acc-pfp', 'acc')
  html.append('pfpprog', 'acc')
  

  
    var Update_name = document.getElementById('Update-name')
  var name = document.getElementById('acc-name')
  Update_name.onclick = function(){
    
    alert('Name Changed')
    localStorage.setItem('name', name.value)
    
    
    
  
}
}


else if (SettingId == '4') {
  createnavbar()
  html.newdoc('Settings - Notifications', 'Settings - Notifications')
  
  html.buttononclick('Enable Notifications', 'localStorage("Notifications", "on")')
  
  html.buttononclick('Disable Notifications', 'localStorage("Notifications", "off")')

}
else {
  
  error()
  
}

function error(){
  
  html.newdoc()
  createnavbar()
  
  html.h1(`Could not find the setting associated with this id ( ` + '"' + SettingId + '"' + ` )`)
  
  
}


document.getElementById('acc-pfp').addEventListener('change', (event) => {
  
  
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('user-pfps/' + file.name);

    storageRef.put(file).on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        const progressBar = document.getElementById('pfpprog');
        progressBar.value = progress;
    });

  storageRef.getDownloadURL().then(function(url){
        const image = document.getElementById('image');
        console.log(url);
         alert('Pfp Updated')
window.setTimeOut(localStorage.setItem('url', url))
    });
  
  storageRef.getDownloadURL().then(function(url){
        const image = document.getElementById('image');
        console.log(url);
         alert('Pfp Updated')
window.setTimeOut(localStorage.setItem('url', url))
    });
  
});


function notifyMe() {
    if (!window.Notification) {
        console.log('Browser does not support notifications.');
    } else {
        // check if permission is already granted
        if (Notification.permission === 'granted') {
            // show notification here
          
          
            var notify = new Notification('Replacord', {
                body: 'PENIS',
                icon: 'https://cdn.glitch.me/7020ef14-24b1-4c8f-973d-607594beb783/Me%20Holding%20Watermelon.png?v=1640107308793',
            });
          
          
          
          
          
          
        } else {
            // request permission from user
            Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    // show notification here
                    var notify = new Notification('Replacord', {
                        body: 'Welcome to Replacord',
                        icon: 'https://cdn.glitch.me/7020ef14-24b1-4c8f-973d-607594beb783/Me%20Holding%20Watermelon.png?v=1640107308793',
                    });
                } else {
                    console.log('User blocked notifications.');
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }
}