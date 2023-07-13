
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
var firebaseConfig = {
      apiKey: "AIzaSyBcRUzpiBuge6LN6r-ylS2svndhnadUkJw",
      authDomain: "whitter-a7bb9.firebaseapp.com",
      databaseURL: "https://whitter-a7bb9-default-rtdb.firebaseio.com",
      projectId: "whitter-a7bb9",
      storageBucket: "whitter-a7bb9.appspot.com",
      messagingSenderId: "727820944681",
      appId: "1:727820944681:web:0945f621312794b0ba6338"
    };
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Bienvenidos "+user_name+"!";


function addRoom() {
       room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 });
 });
      //Finaliza el código
      }
getData();


function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"; }

function logout() { localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"; }
