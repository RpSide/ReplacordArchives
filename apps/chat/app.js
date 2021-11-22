// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAxAqkFw8oIJiHyLAQllDk4W9bh3pbBC4g",
    authDomain: "https://unblocked-infinite-a9e25-default-rtdb.firebaseio.com",
    databaseURL: "https://unblocked-infinite-a9e25-default-rtdb.firebaseio.com",
    projectId: "unblocked-infinite-a9e25",
    storageBucket: "unblocked-infinite-a9e25.appspot.com",
    messagingSenderId: "unblocked-infinite-a9e25.appspot.com",
    appId: "1:267045856766:web:baa6dc5285d5dcf322ccaf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('file').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('user-pfps/' + file.name);

    storageRef.put(file).on('state_changed', (snapshot) => {

    });
 storageRef.getDownloadURL().then(function(url){

console.log(storageRef.getDownloadURL())
console.log(storageRef.getDownloadURL())
alert(url)
alert(url)
    });
});