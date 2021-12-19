var pfp = 'https://firebasestorage.googleapis.com/v0/b/chat-883eb.appspot.com/o/default-pfps%2FNo%20Profile.png?alt=media&token=e6c8197b-c9ad-4fab-a7ca-0afc8ea579f4'

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
  var db = firebase.database()

var create = {
// Bot Creator
bot: function(name) {
 
  var bottokenun = Math.random().toString(36).substr(2)
  
  var bottoken = bottokenun + '' + bottokenun + '' + bottokenun + '' + bottokenun
  
  var botname = name
  
  var bot = db.ref('bot/');
      bot.once('value', function(snapshot) {
        var index = parseFloat(snapshot.numChildren()) + 1
        db.ref('bot/' + bottoken).set({
          name: botname
        })
      })
return bottoken

}
  }

var send = {
  
  
// Fire Base Chat Sender
message: function(token, msg, chatroom)      {
      if ( chatroom != null || chatroom != undefined || chatroom != "" ) {
      var room = 'chats/' + chatroom
      var roommessager = 'chats/' + chatroom + '/messages/'
          }

  
  const dbRef = firebase.database().ref();
dbRef.child("bot/" + token).child('name').get().then((snapshot) => {
  if (snapshot.exists()) {
    var botname = snapshot.val()
      
    
      var messageID = Math.random().toString(20).substr(5)
      var messages = db.ref(roommessager);
      messages.once('value', function(snapshot) {
        var index = parseFloat(snapshot.numChildren()) + 1
        db.ref(roommessager + messageID).set({
		     pfp: pfp,
		     profilepic: pfp,
          client: '2.2 api',
          name: botname,
          message: msg,
          messageID: messageID,
          index: index 
        })
      })
      } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

  
}
}