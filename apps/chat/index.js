//grabs invite code
var queryString = window.location.search
  
  var urlParams = new URLSearchParams(queryString);
   
  var invitecode = urlParams.get('code')

  if (queryString != null || queryString != undefined) {
     localStorage.setItem("code", invitecode + "/");
    localStorage.setItem("chatroomname", invitecode);
}
    
function makeinvite() {

alert('https://essycomp.glitch.me/?appID=3&code=' + invitecode)

}

var roome = localStorage.getItem("code");

if (roome == undefined || roome == null || roome == "") {
 localStorage.setItem("code", 'chatroom1/');
 localStorage.setItem("chatroomname", 'chatroom1');
}

var room = localStorage.getItem("code")
var roomname = localStorage.getItem("chatroomname")

function chatroompicker(params){
localStorage.clear()
var room = localStorage.getItem("code");
let roomcode = prompt("chatroom code", room);
let text;
if (roomcode == null || roomcode == "") {
 alert ('empty field');
} else {
  text = roomcode;
window.location.href = document.documentURI + '?code=' + roomcode
}
}


window.onload = function() {
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

  class MEME_CHAT {
    home() {
      document.body.innerHTML = "";
      this.create_title();
      this.create_join_form();
    }
    chat() {
      this.create_title();
      this.create_chat();
    }
    create_title() {
      var title_container = document.createElement("div");
      title_container.setAttribute("id", "title_container");
      var title_inner_container = document.createElement("div");
      title_inner_container.setAttribute("id", "title_inner_container");

      var title = document.createElement("h1");
      title.setAttribute("id", "title");
      title.textContent = "blank chat";

      title_inner_container.append(title);
      title_container.append(title_inner_container);
      document.body.append(title_container);
    }
    create_join_form() {
      // YOU MUST HAVE (PARENT = THIS). OR NOT. I'M NOT YOUR BOSS!😂
      var parent = this;

      var join_container = document.createElement("div");
      join_container.setAttribute("id", "join_container");
      var join_inner_container = document.createElement("div");
      join_inner_container.setAttribute("id", "join_inner_container");

      var join_button_container = document.createElement("div");
      join_button_container.setAttribute("id", "join_button_container");

      var join_button = document.createElement("button");
      join_button.setAttribute("id", "join_button");
      join_button.innerHTML = 'Join <i class="fas fa-sign-in-alt"></i>';

      var join_input_container = document.createElement("div");
      join_input_container.setAttribute("id", "join_input_container");

      var join_input = document.createElement("input");
      join_input.setAttribute("id", "join_input");
      join_input.setAttribute("maxlength", 25);
      join_input.placeholder = "Name";
      join_input.onkeyup = function() {
        if (join_input.value.length > 0) {
          join_button.classList.add("enabled");
          join_button.onclick = function() {
            parent.save_name(join_input.value);
            join_container.remove();
            parent.create_chat();
          };
        } else {
          join_button.classList.remove("enabled");
        }
      };

      join_button_container.append(join_button);
      join_input_container.append(join_input);
      join_inner_container.append(join_input_container, join_button_container);
      join_container.append(join_inner_container);
      document.body.append(join_container);
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
      var title_container = document.getElementById("title_container");
      var title = document.getElementById("title");
      title_container.classList.add("chat_title_container");
      title.classList.add("chat_title");

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
    send_message(message) {
      var parent = this;
      if (parent.get_name() == null && message == null) {
        return;
      }

      var messages = db.ref("chats/");
      messages.once("value", function(snapshot) {
        var index = parseFloat(snapshot.numChildren()) + 1;
        db.ref("chats/" + `message_${index}`)
          .set({
            profilepic: 'data:image/jpeg;base64,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',
            name: parent.get_name(),
            message: message,
            index: index
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
    refresh_chat() {
      var chat_content_container = document.getElementById(
        "chat_content_container"
      );

      var messages = db.ref("chats/");
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

          var message_container = document.createElement("div");
          message_container.setAttribute("class", "message_container");

          var message_inner_container = document.createElement("div");
          message_inner_container.setAttribute(
            "class",
            "message_inner_container"
          );

          var profpiccont = document.createElement("div");
          profpiccont.setAttribute("class", "profpicont");

          var message_pfp = document.createElement("img");
          message_pfp.setAttribute("class", "message_pfp");
          message_pfp.src = profpic;

          var message_user_container = document.createElement("div");
          message_user_container.setAttribute(
            "class",
            "message_user_container"
          );

          var message_user = document.createElement("p");
          message_user.setAttribute("class", "message_user");
          message_user.textContent = `${name}`;

          var message_content_container = document.createElement("div");
          message_content_container.setAttribute(
            "class",
            "message_content_container"
          );

          var message_content = document.createElement("p");
          message_content.setAttribute("class", "message_content");
          message_content.textContent = `${message}`;

          message_user_container.append(message_user);
          profpiccont.append(message_pfp);
          message_content_container.append(message_content);
          message_inner_container.append(profpiccont, message_user_container, message_content_container);
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
