//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyB4KvsdNKuFQpo6gHSWBimSBtMzb98Jba0",
      authDomain: "kwitter-6d7a5.firebaseapp.com",
      databaseURL: "https://kwitter-6d7a5-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d7a5",
      storageBucket: "kwitter-6d7a5.appspot.com",
      messagingSenderId: "445765881451",
      appId: "1:445765881451:web:0b90b62b898e9830db2b2e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message: msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code



                        //End code
                  }
            });
      });
}
getData();