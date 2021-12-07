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

var names = document.getElementById('name').value
var submit = document.getElementById('submit')
submit.onclick = function() {
  
  window.setItem('name', names)
  
  
  
}


document.getElementById('file').addEventListener('change', (event) => {
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
        window.setItem('url', url)
    });
  
  
    storageRef.getDownloadURL().then(function(url){
        console.log(url);
        window.setItem('url', url)
    });

  
  
});