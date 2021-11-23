// grabs paramiters from the url

var queryString = window.location.search
  
  var urlParams = new URLSearchParams(queryString);
   
  var appID = urlParams.get('appID')
  var invitecode = urlParams.get('code')
if (appID != null && appID != undefined && appID == 3 && invitecode != "" && invitecode != null && invitecode != undefined ) {
var url = 'https://' + document.domain + '/apps/testinggrounds/chat/' + '?code=' + invitecode

    document.write('<script src="index2.js"></script><input type="text" value="' + url + '"="myInput"><button onclick="myFunction()">Copy text</button>')


}



else {

document.write("<h1>Not A Valid Invite Link</h1>")

}