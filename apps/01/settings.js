import { html } from 'https://cdn-cdn.glitch.me/libraies/BetterDOMjs.js'



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


let SettingId = html.geturlparams('sid')
let roomcode = html.geturlparams('code')

let normalurl = 'https://' + document.domain + '/apps/?code=' + roomcode

html.button('Back to chat', normalurl + '&id=0')
html.button('Home', normalurl + '&sid=1&id=1')
html.button('Themes', normalurl + '&sid=2&id=1')
html.button('Account', normalurl + '&sid=3&id=1')

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
  
  //name
  var username = localStorage.getItem('name')
  html.h4('Name' ,'acc-name-title')
  html.input_text('', username , '15',  'acc-name')
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




// Could Not Find Setting + SettingID
else {
  html.title('Settings - Not Found')
  
  html.h1('Setting "' + SettingId + '" Could Not Be Found' ,'ErrorMessage')
  
  
  html.div('Error')
  html.append('ErrorMessage', 'Error')
  
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
      alert('pfp Updated')
        window.setTimeOut(localStorage.setItem('url', url))
    });
  
  storageRef.getDownloadURL().then(function(url){
        const image = document.getElementById('image');
        console.log(url);
    alert('pfp Updated')
        window.setTimeOut(localStorage.setItem('url', url))
    });
});
