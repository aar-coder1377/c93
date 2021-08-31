// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAN-tgAJ2W1_Kz4LD1p21BAjXeW8ylXlW0",
    authDomain: "kwitterapp-29564.firebaseapp.com",
    databaseURL: "https://kwitterapp-29564-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-29564",
    storageBucket: "kwitterapp-29564.appspot.com",
    messagingSenderId: "241328383398",
    appId: "1:241328383398:web:02e9bd1a012e773500db67",
    measurementId: "G-9EF8QESB6Q"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);




function add_user() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });


}


