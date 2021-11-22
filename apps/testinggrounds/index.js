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



dbRef.child(room).child('name').get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


function writeUserData() {

 var roomcode = Math.floor(Math.random() + "" + Math.random() + "" + Math.random() + '' )
  
let roomname = prompt("chatroom name", room);
let text2;
if (roomname == null || roomname == "") {
 alert ('empty field');
} else {
database.ref(roomcode + '/').set({
    name: roomname,
  });

}
}