var room = "f/"

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAxAqkFw8oIJiHyLAQllDk4W9bh3pbBC4g",
    authDomain: "unblocked-infinite-a9e25.firebaseapp.com",
    databaseURL: "https://unblocked-infinite-a9e25-default-rtdb.firebaseio.com",
    projectId: "unblocked-infinite-a9e25",
    storageBucket: "unblocked-infinite-a9e25.appspot.com",
    messagingSenderId: "267045856766",
    appId: "1:267045856766:web:baa6dc5285d5dcf322ccaf",
    measurementId: "G-WR56G0NC25"
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
let roomname = prompt("chatroom code", room);
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