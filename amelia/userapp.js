// <!-- ------SESSION TIMER ------- -->
    let sessionTimer; // Variable to hold the timer
    // Function to handle logout
    function logout() {
        // Redirect to userlogin.html
        window.location.href = '../userlogin.html';
    }
    // Function to handle session timeout
    function startSessionTimer() {
        // Clear any existing timer
        clearTimeout(sessionTimer);
        
        // Set a new timer
        sessionTimer = setTimeout(() => {
            alert("Your session has expired. Please log in again.");
            logout(); // Call the logout function after 5 minutes
        }, 300000); // 300000 milliseconds = 5 minutes
    }
    // Function to reset the session timer on user activity
    function resetSessionTimer() {
        startSessionTimer();
    }
    // Start the session timer when the page loads
    window.onload = startSessionTimer;
    // Listen for user activity events
    window.addEventListener('mousemove', resetSessionTimer);
    window.addEventListener('keypress', resetSessionTimer);
    window.addEventListener('click', resetSessionTimer);
    window.addEventListener('touchstart', resetSessionTimer);





// ----- DYNAMIC NAME ------
// Set the name once
let displayName = "Amelia";

// Select all elements with the class 'display-name' and update them
document.querySelectorAll('.display-name').forEach(el => {
    el.textContent = displayName;
});


let FullName = "Amelia Ann Shaw";
document.querySelectorAll('.full-name').forEach(el => {
    el.textContent = FullName;
});

let Email = "amelliashaw@gmail.com";
document.querySelectorAll('.email').forEach(el => {
    el.textContent = Email;
});

let AccountNumber = "170402041";
document.querySelectorAll('.account-number').forEach(el => {
    el.textContent = AccountNumber;
});

let AccountBalance = "$823,297.55";
document.querySelectorAll('.account-balance').forEach(el => {
    el.textContent = AccountBalance;
});

let PhoneNo = "9726569875";
document.querySelectorAll('.phone-no').forEach(el => {
    el.textContent = PhoneNo;
});

let Gender = "Female";
document.querySelectorAll('.gender').forEach(el => {
    el.textContent = Gender;
});

let DOB = "04/06/1989";
document.querySelectorAll('.d-o-b').forEach(el => {
    el.textContent = DOB;
});

let AcctNameNo = "Amelia Shaw(170402041)";
document.querySelectorAll('.acct-name-no').forEach(el => {
    el.textContent = AcctNameNo;
});
