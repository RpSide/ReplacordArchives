function notonoff() {
    if (!window.Notification) {
        console.log('Browser does not support notifications.');
    } else {
        // check if permission is already granted
        if (Notification.permission === 'granted') {
            // show notification here
          
          if (localStorage.getItem("Notifications") == 'on') {
            var notify = new Notification('Replacord', {
                body: 'Notifications On',
                icon: 'https://cdn.glitch.me/7020ef14-24b1-4c8f-973d-607594beb783/Me%20Holding%20Watermelon.png?v=1640107308793',
            });
          }
          
          else {
            var notify = new Notification('Replacord', {
                body: 'Notifications Off',
                icon: 'https://cdn.glitch.me/7020ef14-24b1-4c8f-973d-607594beb783/Me%20Holding%20Watermelon.png?v=1640107308793',
            });
          }
          
          
          
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

    // Your web app's Firebase configuration
const firebaseConfig = {
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

function notifications_on(){

localStorage.setItem("Notifications", "on")
  notonoff()

}

function notifications_off(){

localStorage.setItem("Notifications", "off")
notonoff()


}



var domain = document.domain

let ctheme = localStorage.getItem('theme');
if (ctheme == null || ctheme == undefined || ctheme == "") {

document.write('<!-- Web Linked Casscading Style Sheet (Css)--><link rel="stylesheet" href="https://' + domain + '/apps/00/themes/VoidBlack.css"/>')

}
else {

document.write('<!-- Web Linked Casscading Style Sheet (Css)--><link rel="stylesheet" href="' + ctheme + '"/>')

}

//grabs paramiters from the url

var queryString = window.location.search
  
  var urlParams = new URLSearchParams(queryString);
   
  var AppID = urlParams.get('id')
  var invite = urlParams.get('inv')
  var copyinvite = urlParams.get('cin')
  var code = urlParams.get('code')
var roomcode = urlParams.get('code')

 if (AppID == '0'){ 
// AppID 0
// Replacord App 
 if (invite != 'true' && copyinvite != 'true') {
	  
	  document.write('<!DOCTYPE html><html lang="en" dir="ltr"><head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nova+Round&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://use.typekit.net/tto8pja.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script><script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script><!-- Web Linked JavaScript (Js)--><script type="text/javascript" src="https://' + domain + '/apps/00/Chat.js"></script></head><body></body></div></div></html>')
	  
	  
  }


// AppID 0 && Inv true
// Replacord App Invitation
   if (invite == 'true' && copyinvite != 'true'){
	if (code == null || code == undefined){
		
		alert("This Is Not A Valid Invite Link")
		document.write("<h1>This Is Not A Valid Invite Link</h1>")
		var invitelink = 'https://' + domain + '/apps/?id=1&inv=true&code=chatroom1'
		document.write('<a style="font-size:25px;" href="' + invitelink + '"> Valid Invite Link ' + invitelink + '</a>')
	}
	 else {
		 var invitelink = 'https://' + domain + '/apps/?id=0&code=' + code
		 document.write("<a href='" + invitelink + "'>Accept invite to room</a>")
		 
	 }
}

// AppID 0 && CopyInv true
// Replacord App Copy Invitation
  if (copyinvite == 'true' && invite != 'true'){
	if (code == null || code == undefined){
  
    		alert("This Is Not A Valid Invite Link")
		document.write("<h1>This Is Not A Valid Invite Link</h1>")
    		var invitelink = 'https://' + domain + '/apps/?id=1&inv=true&code=chatroom1'
		document.write('<a style="font-size:25px;" href="' + invitelink + '"> Valid Invite Link ' + invitelink + '</a>')
    
	}
	 else {
		var invitelink = 'https://' + domain + '/apps/?id=1&inv=true&code=chatroom1'
		document.write('<html><head><title>Copy Invite</title><script src="https://'+ domain +'/apps/00/copy.js"></script></head><body></body></html>')
		 
	 }
}
}
// AppID 1
// Settings
 else if (AppID == '1') {
	  
	  document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script><script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-storage.js"></script></head><body><script type="module" src="https://' + domain + '/apps/01/settings.js"></script></head><body></body></div></div></html>')
	  
	  
  }
// AppID 2
// SignUp/Login
 else if (AppID == '2')  {

    document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Login/SignUp</title><script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script><script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-storage.js"></script></head><body><input id="name" placeholder="Name" maxlength="15"><input type="file" id="file"><button id="submit" style="visibility: hidden;">Login</button><progress id="progress_bar" value="0" max="100"></progress><script src="https://' + domain + '/apps/02/login.js" type="text/javascript"></script></body></html>')

}

// AppID 3
// Themes 

else if (AppID == '3') {

document.write(`

<html>
<!-- Themes.JS -->
<script type="module" src="https://${domain}/apps/03/themes.js"></script>

<!-- Themes.CSS -->
<script type="module" src="https://${domain}/apps/03/themes.CSS.js"></script>
</html>
`)


}

else{

 

  // buttons
var cmaker = document.createElement('button')
    cmaker.setAttribute('id', 'cmke')
    cmaker.setAttribute('class', 'unb')
    cmaker.textContent = 'Create a room'

var jroom = document.createElement('button')
    jroom.setAttribute('id', 'joom')
    jroom.setAttribute('class', 'unb')
    jroom.textContent = 'Join a Room'
    
var invmker = document.createElement('button')
    invmker.setAttribute('id', 'invm')
    invmker.setAttribute('class', 'unb')
    invmker.textContent = 'Make an Invite'
  
  var theme = document.createElement('button')
    theme.setAttribute('id', 'themes')
    theme.setAttribute('class', 'unb')
    theme.textContent = 'Themes'
  
  var settings = document.createElement('button')
     settings.style.backgroundImage = 'url("https://th.bing.com/th/id/OIP.JkNEdkOFmyRT3lulHC-z-wHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7")'
      settings.style.width = "41px";
      settings.style.height = "41px";
      settings.style.padding = '15px'
      settings.style.backgroundSize = '38px'
      settings.style.backgroundColor = 'gray'


  // Open Settings
settings.onclick = function() {
  
  window.location.href = 'https://' + document.domain + '/apps/?id=1&sid=1&code=' + roomcode
  
}

theme.onclick = function(){

window.location.href = 'https://' + document.domain + '/apps/00/themes.html?code=' + roomcode
  
}

  
// make a chatroom   


  
cmaker.onclick = function(){

 var roomcode =  Math.random().toString(20).substr(5)
   
  
let roomname = prompt("chatroom name", 'e');
let text2;
if (roomname == null || roomname == "") {
 alert ('empty field');
} else {
firebase.database().ref('chats/' + roomcode + '/').set({
    name: roomname,
  });
window.location.href = 'https://' + domain +'/apps/?id=0&code=' + roomcode

}
}


  
  // Join a Chatroom

jroom.onclick = function(params) {
let join = prompt("Chatroom invite url", 'https://' + domain + '/apps/?id=0&inv=true&code=chatroom1');
let text2;
if (join == null || join == "") {
 alert ('empty field');
} else {
window.location.href = join
}
}



// Make A invite

invmker.onclick = function(params) {
   window.location.href = 'https://' + domain + '/apps/?cin=true&id=0&code=' + roomcode
}


  document.write(`
 
<title>404 Not Found</title>
<h1>(404 Not Found) Error Finding App Under This ID "${AppID}"</h1>
<h3>This App Does not exist or the link to this app was wrong or mistyped</h3>




`)
  document.body.append(cmaker, jroom, invmker, theme)
  document.write(`<button onclick="history.back()" id="unb">Back</button>`)
  document.body.append(settings)
  
}