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




// HELP FORM SUBMITTION
document.addEventListener('DOMContentLoaded', function() {

    const helpForm = document.getElementById('helpForm');
    
    if (!helpForm) return; // Exit if form doesn't exist



    helpForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // Here you would normally send the data to your server
        // For demonstration, we'll just show the message
        
        // Create and show confirmation message
        const confirmation = document.createElement('div');
        confirmation.style.padding = '20px';
        confirmation.style.backgroundColor = '#f0f8ff';
        confirmation.style.border = '1px solid #d1e7ff';
        confirmation.style.borderRadius = '5px';
        confirmation.style.marginTop = '20px';
        confirmation.style.textAlign = 'center';
        confirmation.innerHTML = `
            <h3>Thank you for reaching out!</h3>
            <p>Your issue is currently undergoing review, we will contact you shortly.</p>
            <p>Reference: ${Date.now()}</p>
        `;
        
        // Insert after the form
        helpForm.parentNode.insertBefore(confirmation, helpForm.nextSibling);
        
        // Optional: Hide the form after submission
        helpForm.style.display = 'none';
        
        // Optional: Actually submit the form to your server after a delay
        // setTimeout(() => { form.submit(); }, 2000);
    });
});




// INTERNATIONAL TRANSFER
document.addEventListener('DOMContentLoaded', function() {

    const interTransfer = document.getElementById('interTransfer');
    
    if (!interTransfer) return; // Exit if form doesn't exist



    interTransfer.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // Here you would normally send the data to your server
        // For demonstration, we'll just show the message
        
        // Create and show confirmation message
        const confirmation = document.createElement('div');
        confirmation.style.padding = '20px';
        confirmation.style.backgroundColor = '#f0f8ff';
        confirmation.style.border = '1px solid #d1e7ff';
        confirmation.style.borderRadius = '5px';
        confirmation.style.marginTop = '20px';
        confirmation.style.textAlign = 'center';

        confirmation.innerHTML = `
            <h3>❗ Urgent Notice: Send Money Temporarily Unavailable</h3>
            <p>Due to unexpected technical issues, "Send Money" is temporarily disabled. Our team is actively working to resolve this.</p>
            
            <p><strong>📌 What you can do:</strong></p>
            <ul style="margin-top: 0; padding-left: 20px;">
                <li>Try again in [timeframe, e.g., 1 hour].</li>
                <li>Use alternative methods like [Bill Pay/ATM transfers].</li>
                <li>Contact support at [phone/email] for assistance.</li>
            </ul>
            
            <p>We sincerely apologize for the inconvenience and will notify you once service is restored.</p>
        `;        
        // Insert after the form
        interTransfer.parentNode.insertBefore(confirmation, interTransfer.nextSibling);
        
        // Optional: Hide the form after submission
        interTransfer.style.display = 'none';
        
        // Optional: Actually submit the form to your server after a delay
        // setTimeout(() => { form.submit(); }, 2000);
    });
});
