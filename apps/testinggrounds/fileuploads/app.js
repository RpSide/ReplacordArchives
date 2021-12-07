// Your web app's Firebase configuration
var firebaseConfig = {
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

document.getElementById('file').addEventListener('change', (event) => {
                  document.getElementById('urlpick').textContent = ''
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('user-pfps/' + file.name);

    storageRef.put(file).on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        const progressBar = document.getElementById('progress_bar');
        progressBar.value = progress;
    });

    storageRef.getDownloadURL().then(function(url){
        console.log(url);
                document.getElementById('urlpick').value = url
    });
  
  
    storageRef.getDownloadURL().then(function(url){
        console.log(url);
                document.getElementById('urlpick').value = url
    });

  
  
});



function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("urlpick");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  window.location.href = 'https://devcompessays.glitch.me/apps/?id=0&code=chatroom1'
}