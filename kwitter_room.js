
var firebaseConfig = {
      apiKey: "AIzaSyBjGMjxSljOdKYIYmfHb473tQZLUvQIbtI",
      authDomain: "im-a-quitter.firebaseapp.com",
      databaseURL: "https://im-a-quitter-default-rtdb.firebaseio.com",
      projectId: "im-a-quitter",
      storageBucket: "im-a-quitter.appspot.com",
      messagingSenderId: "285922550301",
      appId: "1:285922550301:web:68ef2150d7e0eefefd1cf4"
    };
    
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name"); 
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room__name);

      window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
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
        window.location = "index.html";
}
