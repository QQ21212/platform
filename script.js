// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('message').innerText = "Login successful!";
            document.getElementById('auth-container').style.display = 'none';
            document.getElementById('profile-container').style.display = 'block';
            document.getElementById('user-email').innerText = email;
        })
        .catch(error => {
            document.getElementById('message').innerText = error.message;
        });
}

// Register function
function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('message').innerText = "Registration successful!";
            document.getElementById('auth-container').style.display = 'none';
            document.getElementById('profile-container').style.display = 'block';
            document.getElementById('user-email').innerText = email;
        })
        .catch(error => {
            document.getElementById('message').innerText = error.message;
        });
}

// Logout function
function logout() {
    auth.signOut()
        .then(() => {
            document.getElementById('message').innerText = "";
            document.getElementById('profile-container').style.display = 'none';
            document.getElementById('auth-container').style.display = 'block';
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
        })
        .catch(error => {
            document.getElementById('message').innerText = error.message;
        });
}
