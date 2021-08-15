
//ADD YOUR FIREBASE LINKS

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyASQg1CeqT-5krIvTa58RKdJAbWenj_lNc",
    authDomain: "kwitter-9f216.firebaseapp.com",
    databaseURL: "https://kwitter-9f216-default-rtdb.firebaseio.com",
    projectId: "kwitter-9f216",
    storageBucket: "kwitter-9f216.appspot.com",
    messagingSenderId: "227762838944",
    appId: "1:227762838944:web:7181a2abf483e9087cd8c5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding_user"
      }); 
  }