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


  var db = firebase.database();

function d(params){
let roomcode = prompt("chatroom code", room);
let text;
if (roomcode == null || roomcode == "") {
 alert ('empty field');
} else {
  text = roomcode;

let nm = prompt("chatroom name", '');
let text;
if (nm == null || nm == "") {
 alert ('empty field');
} else {
  text = nm;

        var e = db.ref('e/');
      e.once("value", function(snapshot) {
        var index = parseFloat(snapshot.numChildren()) + 1;
        db.ref('e/')
          .set({
            name:nm
          })
      });

var e = db.ref('e/');
      e.on("value", function(snapshot) {
        if (snapshot.numChildren() == 0) {
          return;
        }
        var values = Object.values(snapshot.val());
        var guide = [];
        var unordered = [];
        var ordered = [];
        for (var i, i = 0; i < values.length; i++) {
          guide.push(i + 1);
          unordered.push([values[i], values[i].index]);
        }

        guide.forEach(function(key) {
          var found = false;
          unordered = unordered.filter(function(item) {
            if (!found && item[1] == key) {
              ordered.push(item[0]);
              found = true;
              return false;
            } else {
              return true;
            }
          });
        });

        ordered.forEach(function(data) {
          var name = data.name;
        })})};


window.location.replace( 'https://devcompessay.glitch.me?appID=3&code=' + roomcode)
}
}