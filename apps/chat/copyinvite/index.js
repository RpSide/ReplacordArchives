// grabs paramiters from the url

var queryString = window.location.search
  
  var urlParams = new URLSearchParams(queryString);
   
  var appID = urlParams.get('appID')
  var invitecode = urlParams.get('code')
if (appID != null && appID != undefined && appID == 3 && invitecode != "" && invitecode != null && invitecode != undefined ) {
var url = 'https://' + document.domain + '/apps/chat/invite/' + '?appID=3&code=' + invitecode

    document.write('<link rel="stylesheet" href="index.css"><script src="index2.js"></script><input type="text" value="' + url + '"id="myInput"><button onclick="myFunction()">Copy Invite Link</button>')
}



else {

document.write("<h1>Not A Valid Invite Link</h1>")

}