// Import Firebase Auth correctly
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDjcuFPp0KUcTvI5t3vs3dnRwCAMbmobMI",
    authDomain: "hance-c177b.firebaseapp.com",
    projectId: "hance-c177b",
    storageBucket: "hance-c177b.appspot.com",
    messagingSenderId: "586762283117",
    appId: "1:586762283117:web:4c485f6d2edcac1e61f764",
    measurementId: "G-468S5Q0203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account", // Forces the user to select an account every time
});

// Check if the user is already signed in
auth.onAuthStateChanged((user) => {
    if (user) {
        // If user is already signed in, handle accordingly (e.g., show user info)

        console.log(user.displayName);
        console.log(user.email);
        console.log(user.photoURL);
        // console.log("User is already signed in:", user);
    } else {
        // If no user is signed in, trigger the sign-in popup
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                // console.log("User signed in:", user);
                // console.log(user.displayName);
                // console.log(user.email);
                // console.log(user.photoURL);

            })
            .catch((error) => {
                console.error("Error during sign-in:", error);
            });
    }
});

const signInBtn = document.getElementById("google-btn");
signInBtn.addEventListener("click", () => {
    console.log("Hello");
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);

            // The signed-in user info.
            const user = result.user;
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "./homePage.html";
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
        });
});
// all good till this