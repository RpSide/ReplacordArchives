// grabs paramiters from the url

var queryString = window.location.search
  
  var urlParams = new URLSearchParams(queryString);
   
  var appID = urlParams.get('id')
  var invitecode = urlParams.get('code')
  
if (appID != null && appID != undefined && appID == 0 && invitecode != "" && invitecode != null && invitecode != undefined ) {
var url = 'https://' + document.domain + '/apps/' + '?id=0&inv=true&code=' + invitecode

    document.write('<link rel="stylesheet" href="index.css"><script src="https://devcompessays.glitch.me/apps/00/copy2.js"></script><input type="text" value="' + url + '"id="myInput"><button onclick="myFunction()">Copy Invite Link</button>')
}



else {

document.write("<h1>Not A Valid Invite Link</h1>")

}

