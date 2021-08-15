
//ADD YOUR FIREBASE LINKS HERE
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

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "kwitter.html";
}
    
