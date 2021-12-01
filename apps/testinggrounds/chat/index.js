var pfpurle = localStorage.getItem("url");
var namee = localStorage.getItem("name");
var client = 'Developer'
if (client == 'Developer') {

var baseurl = '/apps/testinggrounds/chat'

}
else {
var baseurl = '/apps/chat'
}


window.onload = function() {
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
  var db = firebase.database();
  var database = firebase.database();

// sign up, in, and out


  class MEME_CHAT {
    home() {
      document.body.innerHTML = "";
      create_title();
      this.create_join_form();
    }
    chat() {
      create_title();
      this.create_chat();
    }

  create_join_form(){
      // YOU MUST HAVE (PARENT = THIS). OR NOT. I'M NOT YOUR BOSS!😂
      var parent = this;

      var join_container = document.createElement('div')
      join_container.setAttribute('id', 'join_container')
      var join_inner_container = document.createElement('div')
      join_inner_container.setAttribute('id', 'join_inner_container')

      var join_button_container = document.createElement('div')
      join_button_container.setAttribute('id', 'join_button_container')

      var join_button = document.createElement('button')
      join_button.setAttribute('id', 'join_button')
      join_button.innerHTML = 'Join <i class="fas fa-sign-in-alt"></i>'

      var join_input_container = document.createElement('div')
      join_input_container.setAttribute('id', 'join_input_container')

      var join_input_2 = document.createElement("input");
      join_input_2.setAttribute("id", "join_input");
      join_input_2.placeholder = "Picture url";
      join_input_2.textContent = pfpurle;

      var join_input = document.createElement("input");
      join_input.setAttribute("id", "join_input");
      join_input.setAttribute("maxlength", 25);
      join_input.placeholder = "Name";
      join_input.textContent = namee;






      join_input.onkeyup = function() {
        if (join_input.value.length > 0) {
          join_button.classList.add("enabled");
          join_button.onclick = function() {
            parent.save_name(join_input.value);
            parent.save_url(join_input_2.value);
            join_container.remove();
            parent.create_chat();
          };
        } else {
          join_button.classList.remove("enabled");
        }
      };

      join_button_container.append(join_button);
      join_input_container.append(join_input);
      join_input_container.append(join_input_2);
      join_inner_container.append(join_input_container, join_button_container);
      join_container.append(join_inner_container);
      document.body.append(join_container);

// 
    }
    create_load(id) {
      // YOU ALSO MUST HAVE (PARENT = THIS). BUT IT'S WHATEVER THO.
      var parent = this;
      var container = document.getElementById(id);
      container.innerHTML = "";

      var loader_container = document.createElement("div");
      loader_container.setAttribute("class", "loader_container");

      var loader = document.createElement("div");
      loader.setAttribute("class", "loader");

      loader_container.append(loader);
      container.append(loader_container);
    }
    create_chat() {
      var parent = this;
      // GET THAT MEMECHAT HEADER OUTTA HERE

    

      var chat_container = document.createElement("div");
      chat_container.setAttribute("id", "chat_container");

      var chat_inner_container = document.createElement("div");
      chat_inner_container.setAttribute("id", "chat_inner_container");

      var chat_content_container = document.createElement("div");
      chat_content_container.setAttribute("id", "chat_content_container");

      var chat_input_container = document.createElement("div");
      chat_input_container.setAttribute("id", "chat_input_container");

      var chat_input_send = document.createElement("button");
      chat_input_send.setAttribute("id", "chat_input_send");
      chat_input_send.setAttribute("disabled", true);
      chat_input_send.innerHTML = `<i class="far fa-paper-plane"></i>`;

      var chat_input = document.createElement("input");
      chat_input.setAttribute("id", "chat_input");
      chat_input.setAttribute("maxlength", 1000);
      chat_input.placeholder = `${localStorage.getItem("name")}. Say something...`;
      chat_input.onkeyup = function() {
        if (chat_input.value.length > 0) {
          chat_input_send.removeAttribute("disabled");
          chat_input_send.classList.add("enabled");
          chat_input_send.onclick = function() {
            chat_input_send.setAttribute("disabled", true);
            chat_input_send.classList.remove("enabled");
            if (chat_input.value.length <= 0) {
              return;
            }
            parent.create_load("chat_content_container");
            parent.send_message(chat_input.value);
            chat_input.value = "";
            // Focus on the input there after
            chat_input.focus();
          };
        } else {
          chat_input_send.classList.remove("enabled");
        }
      };

      var chat_logout_container = document.createElement("div");
      chat_logout_container.setAttribute("id", "chat_logout_container");

      var chat_logout = document.createElement("button");
      chat_logout.setAttribute("id", "chat_logout");
      chat_logout.textContent = `${localStorage.getItem("name")} • logout`;
      chat_logout.onclick = function() {
        localStorage.clear();
        parent.home();
      };

      chat_logout_container.append(chat_logout);
      chat_input_container.append(chat_input, chat_input_send);
      chat_inner_container.append(
        chat_content_container,
        chat_input_container,
        chat_logout_container
      );
      chat_container.append(chat_inner_container);
      document.body.append(chat_container);
      parent.create_load("chat_content_container");
      this.refresh_chat();
    }
    save_name(name) {
      localStorage.setItem("name", name);
    }
    save_url(url){
      localStorage.setItem("url", url);
  }
    send_message(message) {
      var parent = this;
      if (parent.get_name() == null && message == null) {
        return;
      }


let date = new Date();
var datee = (date.getMonth() + 1) + "/" + date.getDate()
let dateee = new Date();

      if (dateee.getHours() > 12 ) {

var time = (dateee.getHours() - 12) + ':' + dateee.getMinutes() + ' pm'

}
      else {

var time = (dateee.getHours()) + ':' + dateee.getMinutes() + ' am'


}

      var messages = db.ref('chats/' + room + 'messages/');
      messages.once("value", function(snapshot) {
        var index = parseFloat(snapshot.numChildren()) + 1;
        db.ref('chats/' + room + 'messages/' + `message_${index}`)
          .set({
            profilepic: parent.get_url(),
            name: parent.get_name() + '  ( ' + time + ' | ' + datee + ' )',
            message: message,
            index: index,
            time: time,
            date: datee,
            client: client
          })
          .then(function() {
            parent.refresh_chat();
          });
      });
    }
    get_name() {
      if (localStorage.getItem("name") != null) {
        return localStorage.getItem("name");
      } else {
        this.home();
      }
    }

get_url() {
      if (localStorage.getItem("url") == null || localStorage.getItem("url") == undefined || localStorage.getItem("url") == "") {
      localStorage.setItem("url", 'https://th.bing.com/th/id/R.3cd190548b0f15a338d44eb465dd0476?rik=Bn7r%2fBvgVHSihw&pid=ImgRaw&r=0');
        return localStorage.getItem("url");
      } else {
return localStorage.getItem("url");
      }
    }
    refresh_chat() {
      var chat_content_container = document.getElementById(
        "chat_content_container"
      );

      var messages = db.ref('chats/' + room + 'messages/');
      messages.on("value", function(snapshot) {
        chat_content_container.innerHTML = "";
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
          var profpic = data.profilepic;
          var name = data.name;
          var message = data.message;
          var ver = data.client;

          var message_container = document.createElement("div");
          message_container.setAttribute("class", "message_container");

          var message_inner_container = document.createElement("div");
          message_inner_container.setAttribute(
            "class",
            "message_inner_container"
          );

          var message_pfp = document.createElement("img");
          message_pfp.setAttribute("class", "message_pfp");
          message_pfp.src = profpic;

          var message_user_container = document.createElement("div");
          message_user_container.setAttribute(
            "class",
            "message_user_container"
          );

          var message_user = document.createElement("span");
          message_user.setAttribute("class", "message_user");
          message_user.textContent = "" + `${name}` + ' - ' + ver;

          var message_content_container = document.createElement("div");
          message_content_container.setAttribute(
            "class",
            "message_content_container"
          );

          var message_content = document.createElement("p");
          message_content.setAttribute("class", "message_content");
          message_content.textContent = message;

          message_user_container.append(message_pfp);
          message_user_container.append(message_user);
          
          message_content_container.append(message_content);
          message_inner_container.append(message_user_container, message_content_container);
          message_container.append(message_inner_container);

          chat_content_container.append(message_container);
        });
        // Go to the recent message at the bottom of the container
        chat_content_container.scrollTop = chat_content_container.scrollHeight;
      });
    }
  }

  app = new MEME_CHAT();
  // if this is a new user then take them to the home screen
  if (localStorage.getItem("name") == null) {
    app.home();
  } else {
    // else. They are a return user.
    app.chat();
  }
};

// grabs paramiters from the url

var queryString = window.location.search
  
  var urlParams = new URLSearchParams(queryString);
   
  var roomcode = urlParams.get('code')
  var room = roomcode + '/'

function create_title(params) {





var title_container = document.createElement('div')
      title_container.setAttribute('id', 'untitle')
var title_container2 = document.createElement('div')
      title_container2.setAttribute('id', 'untitle2')
var title = document.createElement('h1')
title.setAttribute('id', 'title')

var subtitle = document.createElement('span')
subtitle.setAttribute('id', 'title2')
 var title3 = document.createElement("title")
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

var bttods = document.createElement('button')
    bttods.setAttribute('id', 'bttods')
    bttods.setAttribute('class', 'unb')
    bttods.textContent = 'Switch to Old'

// go to the old days 


bttods.onclick = function(){

window.location.href = 'https://' + document.domain + '/apps/archive/chat/?appID=3&code=chatroom1'
}
  
// make a chatroom   


cmaker.onclick = function(){

 var roomcode = Math.random().toString(20).substr(5)
   
  
let roomname = prompt("chatroom name", 'e');
let text2;
if (roomname == null || roomname == "") {
 alert ('empty field');
} else {
firebase.database().ref('chats/' + roomcode + '/').set({
    name: roomname,
  });
window.location.href = 'https://' + document.domain + baseurl +'/invite?appID=3&code=' + roomcode

}
}

  
  // Join a Chatroom

jroom.onclick = function(params) {
let join = prompt("Chatroom invite url", 'https://' + document.domain + baseurl + '/invite/' + '?appID=3&code=chatroom1');
let text2;
if (join == null || join == "") {
 alert ('empty field');
} else {
window.location.href = join
}
}


// Make A invite

invmker.onclick = function(params) {
   window.location.href = 'https://' + document.domain + baseurl + '/copyinvite/' + '?appID=3&code=' + roomcode
}



firebase.database().ref().child('chats/' + roomcode).child('name').get().then((snapshot) => {
  if (snapshot.exists()) {

var titlee = snapshot.val() + ' || Scuffed Discord'
    title3.textContent = titlee
    title.textContent = snapshot.val()
    console.log(snapshot.val());
    return snapshot.val() 
    }
  
  else {
    alert('this room does not exist we will send you back to the last room you were in')
    history.back()
    title.textContent = ''
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

firebase.database().ref().child('chats/' + roomcode).child('welcome').get().then((snapshot) => {
  if (snapshot.exists()) {
var welcomemessage = snapshot.val()
if (welcomemessage != undefined || welcomemessage != null) {

alert(welcomemessage)
  
  }

    
    }
  
  else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

firebase.database().ref().child('chats/' + roomcode).child('subtitle').get().then((snapshot) => {
  if (snapshot.exists()) {
var subtitle2 = snapshot.val()
if (subtitle2 != undefined || subtitle2 != null) {

  subtitle.textContent = snapshot.val()

  
  }

    
    }
  
  else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
    
      
      title_container.append(title)
      title_container.append(title3)
      title_container.append(subtitle)
      title_container2.append(bttods)
      title_container2.append(cmaker)
      title_container2.append(jroom)
      title_container2.append(invmker)
      document.body.append(title_container)
      document.body.append(title_container2)

    }

    /*create_title(){
      var title_container = document.createElement('div')
      title_container.setAttribute('id', 'title_container')
      var title_inner_container = document.createElement('div')
      title_inner_container.setAttribute('id', 'title_inner_container')

      var title = document.createElement('h1')
      title.setAttribute('id', 'title')
      title.textContent = roomname

      title_inner_container.append(title)
      title_container.append(title_inner_container)
      document.body.append(title_container)
    }*/




 

