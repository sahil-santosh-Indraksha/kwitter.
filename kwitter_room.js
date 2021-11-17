
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAvLWd7BpWVKC8UdyZzNaNnkZPKutiYPCY",
      authDomain: "kwitter-3c9ad.firebaseapp.com",
      databaseURL: "https://kwitter-3c9ad-default-rtdb.firebaseio.com",
      projectId: "kwitter-3c9ad",
      storageBucket: "kwitter-3c9ad.appspot.com",
      messagingSenderId: "685602894791",
      appId: "1:685602894791:web:44cec45cd773d4b056dfe2"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome  "+user_name+"!";

function addroom(){
      Room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose:"ädding room name"
      });
      localStorage.setItem("room_name",Room_name);
      window.location="kwitter_page.html";
}
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_name is "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML  +=row;
//End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}