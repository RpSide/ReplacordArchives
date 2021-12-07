//grabs paramiters from the url

var queryString = window.location.search
  
  var urlParams = new URLSearchParams(queryString);
   
  var AppID = urlParams.get('id')
  var invite = urlParams.get('inv')
  var copyinvite = urlParams.get('cin')
  var code = urlParams.get('code')

// Scuffed Discord App 
 if (AppID == '0' && invite != 'true' && copyinvite != 'true') {
	  
	  document.write('<!DOCTYPE html><html lang="en" dir="ltr"><head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nova+Round&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://use.typekit.net/tto8pja.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script><script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script><!-- Web Linked Casscading Style Sheet (Css)--><link rel="stylesheet" href="https://devcompessays.glitch.me/apps/00/Chat.css"/><!-- Web Linked JavaScript (Js)--><script type="text/javascript" src="https://devcompessays.glitch.me/apps/00/Chat.js"></script></head><body></body></div></div></html>')
	  
	  
  }

  
// Scuffed Discord App Invitation
   if (AppID == '0' && invite == 'true' && copyinvite != 'true'){
	if (code == null || code == undefined){
		
		alert("This Is Not A Valid Invite Link")
		document.write("<h1>This Is Not A Valid Invite Link</h1>")
		var invitelink = 'https://' + document.domain + '/apps/?id=1&inv=true&code=chatroom1'
		document.write('<a style="font-size:25px;" href="' + invitelink + '"> Valid Invite Link ' + invitelink + '</a>')
	}
	 else {
		 var invitelink = 'https://' + document.domain + '/apps/?id=0&code=' + code
		 document.write("<a href='" + invitelink +"'>Accept invite to room</a>")
		 
	 }
}


// Scuffed Discord App Copy Invitation
   if (AppID == '0' && copyinvite == 'true' && invite != 'true'){
	if (code == null || code == undefined){
  
    		alert("This Is Not A Valid Invite Link")
		document.write("<h1>This Is Not A Valid Invite Link</h1>")
    		var invitelink = 'https://' + document.domain + '/apps/?id=1&inv=true&code=chatroom1'
		document.write('<a style="font-size:25px;" href="' + invitelink + '"> Valid Invite Link ' + invitelink + '</a>')
    
	}
	 else {
		var invitelink = 'https://' + document.domain + '/apps/?id=1&inv=true&code=chatroom1'
		document.write('<html><head><title>Copy Invite</title><script src="https://devcompessays.glitch.me/apps/00/copy.js"></script></head><body></body></html>')
		 
	 }
}


// Login
 if (AppID == '1' && invite != 'true') {
	  
	  document.write('<!DOCTYPE html><html lang="en" dir="ltr"><head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nova+Round&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://use.typekit.net/tto8pja.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script><script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script><!-- Web Linked JavaScript (Js)--><script type="text/javascript" src="https://kidslearning.glitch.me/apps/01/login.js"></script></head><body></body></div></div></html>')
	  
	  
  }

// account page
  if (AppID == '2')  {


}