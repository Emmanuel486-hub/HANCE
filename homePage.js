console.log("Hello");
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');








function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update Slide Number
    document.querySelectorAll('.slide-number').forEach((el, index) => {
        el.textContent = `${index + 1}/${totalSlides}`;
    });

    // Update Dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

// Auto-scroll every 2 seconds, ensuring proper centering
setInterval(() => {
    nextSlide();
}, 2500); // Slide transition + 2 seconds pause

// Dots click event
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});


// Firebase Configuration and Initialization (Same as previous)
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
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

// // Check if user is logged in
// auth.onAuthStateChanged((user) => {
//     if (user) {
//         updateProfileUI(user);
//     } else {
//         window.location.href = "index.html"; // Redirect to login page if not signed in
//     }
// });

// Update profile information in the card
function updateProfileUI(user) {
    document.getElementById('profilePicLarge').src = user.photoURL;
    document.getElementById('profileName').textContent = user.displayName;
    document.getElementById('profileEmail').textContent = user.email;
    document.getElementById('profilePhone').textContent = user.phoneNumber ? user.phoneNumber : "No phone linked";
}

// Sign out function
document.getElementById('signOutBtn').addEventListener('click', function() {
    auth.signOut()
        .then(() => {
            window.location.href = "index.html"; // Redirect to login page after sign-out
        })
        .catch((error) => {
            console.error("Error during sign-out:", error);
        });
});

// Initialize Firebase (Add this if not already present in home.html)
// const firebaseConfig = {
//     apiKey: "AIzaSyDjcuFPp0KUcTvI5t3vs3dnRwCAMbmobMI",
//     authDomain: "hance-c177b.firebaseapp.com",
//     projectId: "hance-c177b",
//     storageBucket: "hance-c177b.appspot.com",
//     messagingSenderId: "586762283117",
//     appId: "1:586762283117:web:4c485f6d2edcac1e61f764",
//     measurementId: "G-468S5Q0203"
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Function to Update Profile UI
function updateUI(user) {
    if (user) {
        document.getElementById('profile-btn').style.display = 'block';
        document.getElementById('profilePic').src = user.photoURL || 'default.png';
        document.getElementById('profilePicLarge').src = user.photoURL || 'default.png';
        document.getElementById('profileName').textContent = user.displayName || 'No name available';
        document.getElementById('profileEmail').textContent = user.email || 'No email available';
        document.getElementById('profilePhone').textContent = user.phoneNumber || 'No phone number available';
    } else {
        console.log("User is not signed in.");
        window.location.href = "index.html"; // Redirect back to login page if not signed in
    }
}

// Listen for Auth State Change
auth.onAuthStateChanged((user) => {
    if (user) {
        updateUI(user);
    } else {
        console.log("User not logged in.");
        window.location.href = "index.html"; // Redirect to login page
    }
});

// Toggle Profile Dropdown
document.getElementById('profile-btn').addEventListener('click', function() {
    let dropdown = document.getElementById('profile-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Sign Out Function
document.getElementById('signOutBtn').addEventListener('click', function() {
    auth.signOut()
        .then(() => {
            window.location.href = "index.html"; // Redirect to login page after sign-out
        })
        .catch((error) => {
            console.error("Error during sign-out:", error);
        });
});
document.getElementById('profileButton').addEventListener('click', function() {
    document.getElementById('loginOptionsModal').style.display = 'flex';
});

function closeLoginModal() {
    document.getElementById('loginOptionsModal').style.display = 'none';
}
document.getElementById('loginOptionsModal').style.display = 'none';
}