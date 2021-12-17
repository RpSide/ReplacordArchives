 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF46UDRHhke3cHfUFOZ3YNcq9EJWdC10Y",
  authDomain: "chat-883eb.firebaseapp.com",
  projectId: "chat-883eb",
  storageBucket: "chat-883eb.appspot.com",
  messagingSenderId: "421817736954",
  appId: "1:421817736954:web:32ac95e1f698ea3ff0f343",
  measurementId: "G-YCQZGGEGZ9"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 var database = firebase.database();

const dbRef = firebase.database().ref();

function makenormalroom() {

 var roomcode =  Math.random().toString(20).substr(5)
  
let roomname = prompt("chatroom name", '');
let text2;
if (roomname == null || roomname == "") {
 alert ('empty field');
} else {
firebase.database().ref('chats/' + roomcode + '/').set({
    name: roomname,
  });
}
}


function makespecialroom(params) {
  
let roomname = prompt("chatroom name", '');
let text2;
if (roomname == null || roomname == "") {
 alert ('empty field');
} else {
let roomcode = prompt("chatroom code", '');
let text2;
if (roomcode == null || roomcode == "") {
 alert ('empty field');
} else {
firebase.database().ref(roomcode + '/').set({
    name: roomname,
  });
}
}
}


function addextra() {
 var roomcode = document.getElementById('ccode').value
var roomname = document.getElementById('cname').value
var welcome = document.getElementById('cwm').value 
var subtitle = document.getElementById('csubt').value  
  
firebase.database().ref(roomcode + '/').set({
    name: roomname,
      welcome: welcome,
    subtitle: subtitle
  });
 }