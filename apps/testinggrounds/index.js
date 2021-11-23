var room = "f/"

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

 var roomcode = Math.floor(Math.random() * 8) + 1 + "" + Math.floor(Math.random() * 8) + 1 + "" + Math.floor(Math.random() * 8) + 1 + "" + Math.floor(Math.random() * 8) + 1 + "" + Math.floor(Math.random() * 8) + 1 + "" + Math.floor(Math.random() * 8) + 1 + "" + Math.floor(Math.random() * 8) + 1 + "" + Math.floor(Math.random() * 8) + 1 + "" + Math.floor(Math.random() * 8) + 1 + "" + Math.floor(Math.random() * 8) + 1
  
let roomname = prompt("chatroom name", room);
let text2;
if (roomname == null || roomname == "") {
 alert ('empty field');
} else {
database.ref(roomcode + '/').set({
    name: roomname,
  });


dbRef.child(roomcode).child('name').get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

}
}

function makespecialroom() {
  
let roomcode = prompt("chatroom code", room);
let text2;
if (roomcode == null || roomcode == "") {
 alert ('empty field');
} else {
let roomname = prompt("chatroom name", room);
let text2;
if (roomname == null || roomname == "") {
 alert ('empty field');
} else {
database.ref(roomcode + '/').set({
    name: roomname,
  });
}


dbRef.child(roomcode).child('name').get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

}
}


function writeUserData() {
  
let roomname = prompt("chatroom name", room);
let text2;
if (roomname == null || roomname == "") {
 alert ('empty field');
} else {
database.ref(roomcode + '/').set({
    name: roomname,
  });


dbRef.child(roomcode).child('name').get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

}
}