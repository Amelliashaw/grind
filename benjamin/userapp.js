// ------------- AUTHENTICATION GUARD ------------- //
(function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const activeUser = sessionStorage.getItem('activeUser');
    const currentFolder = window.location.pathname.split('/')[1]; // e.g., 'amelia'

    if (isLoggedIn !== 'true' || activeUser !== currentFolder) {
        window.location.href = '../userlogin.html'; // Redirect to login if not allowed
    }
})();






// <!-- ------SESSION TIMER ------- -->
    let sessionTimer; // Variable to hold the timer

    // Function to handle logout
    function logout() {
        // Clear session storage completely
        sessionStorage.clear();

        // Redirect to login page
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

    // Prevent back navigation cache after logout
    window.addEventListener("pageshow", function (event) {
        if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
            location.reload();
        }
    });






// ----- DYNAMIC NAME ------
// Set the name once
let displayName = "Benjamin";

// Select all elements with the class 'display-name' and update them
document.querySelectorAll('.display-name').forEach(el => {
    el.textContent = displayName;
    el.value = displayName;
});


let FullName = "Benjamin Ethan Graham";
document.querySelectorAll('.full-name').forEach(el => {
    el.textContent = FullName;
    el.value = FullName; 
});

let Email = "flywithbengray@outlook.com";
document.querySelectorAll('.email').forEach(el => {
    el.textContent = Email;
    el.value = Email;
});

let AccountNumber = "170402042";
document.querySelectorAll('.account-number').forEach(el => {
    el.textContent = AccountNumber;
    el.value = AccountNumber;
});

let AccountBalance = "$2,823,297.55";
document.querySelectorAll('.account-balance').forEach(el => {
    el.textContent = AccountBalance;
    el.value = AccountBalance;
});

let PhoneNo = "2085689922";
document.querySelectorAll('.phone-no').forEach(el => {
    el.textContent = PhoneNo;
    el.value = PhoneNo;
});

let Gender = "Male";
document.querySelectorAll('.gender').forEach(el => {
    el.textContent = Gender;
    el.value = Gender;
});

let DOB = "01/02/1987";
document.querySelectorAll('.d-o-b').forEach(el => {
    el.textContent = DOB;
    el.value = DOB;
});

let AcctNameNo = "Benjamin Graham(170402042)";
document.querySelectorAll('.acct-name-no').forEach(el => {
    el.textContent = AcctNameNo;
    el.value = AcctNameNo;
});



// TABLE DETAILS EDIT
document.addEventListener('DOMContentLoaded', () => {
    const tableData = [
        {
          id: 'NYHGR76284',
          date: '21/04/2025',
          amount: '-$620.00',
          type: 'Debit',
          note: 'HANGAR FEE JFK INTL NY',
          action: 'Completed'
        },     
        {
          id: 'VENHTL10467',
          date: '20/04/2025',
          amount: '-$120.00',
          type: 'Debit',
          note: 'HOTEL DANIELI VENICE IT',
          action: 'Completed'
        },
        {
          id: 'NYFUEL38591',
          date: '20/04/2025',
          amount: '-$1,274.45',
          type: 'Debit',
          note: 'AV FUEL TETERBORO NJ',
          action: 'Completed'
        },
        {
          id: 'VENHTL10492',
          date: '18/04/2025',
          amount: '-$340.00',
          type: 'Debit',
          note: 'HOTEL DANIELI VENICE IT',
          action: 'Completed'
        },
        {
          id: 'NYCREW20318',
          date: '18/04/2025',
          amount: '-$89.30',
          type: 'Debit',
          note: 'CREW MEAL JFK TERMINAL 4',
          action: 'Completed'
        },
        {
          id: 'NYTRANS01845',
          date: '17/04/2025',
          amount: '-$58.00',
          type: 'Debit',
          note: 'UBER RIDE TO LGA NY',
          action: 'Completed'
        },
        {
          id: 'NYMAPS73352',
          date: '16/04/2025',
          amount: '-$27.99',
          type: 'Debit',
          note: 'AERO CHARTS SUBSCRIPTION',
          action: 'Completed'
        },
        {
          id: 'DUTYFRE82912',
          date: '16/04/2025',
          amount: '-$123.75',
          type: 'Debit',
          note: 'DUTY FREE PURCHASE CDG FR',
          action: 'Completed'
        }
    ];
        
    const tableContainer = document.getElementById('expensesTableContainer');
  
    if (!tableContainer) return;
  
    let tableHTML = `
      <table class="htb-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    tableData.forEach(row => {
      tableHTML += `
        <tr>
          <td>${row.id}</td>
          <td>${row.date}</td>
          <td>${row.amount}</td>
          <td>${row.type}</td>
          <td>${row.note}</td>
          <td>${row.action}</td>
        </tr>
      `;
    });
  
    tableHTML += `</tbody></table>`;
  
    tableContainer.innerHTML = tableHTML;
});



// TO PRINT TRANSACTION HISTORY
function printTransactionTable() {
    const table = document.getElementById('expensesTableContainer');
    if (!table) return;
  
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>Transaction History</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h2>Debit Transactions</h2>
          ${table.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
};
  
  



// HELP FORM SUBMISSION
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
// document.addEventListener('DOMContentLoaded', function () {
//     const interTransfer = document.getElementById('interTransfer');

//     if (!interTransfer) return; // Exit if form doesn't exist

//     interTransfer.addEventListener('submit', function (e) {
//         e.preventDefault(); // Prevent default form submission

//         // Disable the button and show processing
//         const submitBtn = interTransfer.querySelector('.help-submit-button');
//         submitBtn.disabled = true;
//         submitBtn.innerHTML = `<span class="spinner" style="margin-right: 8px;">⏳</span> Processing Transfer...`;

//         // Simulate delay before showing the message
//         setTimeout(() => {
//             // Remove spinner and disable button
//             submitBtn.disabled = false;
//             submitBtn.innerHTML = `Transfer Funds`;

//             // Create and show confirmation message
//             const confirmation = document.createElement('div');
//             confirmation.style.padding = '20px';
//             confirmation.style.backgroundColor = '#f0f8ff';
//             confirmation.style.border = '1px solid #d1e7ff';
//             confirmation.style.borderRadius = '5px';
//             confirmation.style.marginTop = '20px';
//             confirmation.style.textAlign = 'center';

//             confirmation.innerHTML = `
//                 <h3>❗ Urgent Notice: Send Money Temporarily Unavailable</h3>
//                 <p>Due to unexpected technical issues, "Send Money" is temporarily disabled. Our team is actively working to resolve this.</p>
                
//                 <p><strong>📌 What you can do:</strong></p>
//                 <ul style="margin-top: 0; padding-left: 20px; text-align: left;">
//                     <li>Try again in 1 hour.</li>
//                     <li>Use alternative methods like Bill Pay or ATM transfers.</li>
//                     <li>Contact support at support@thsbinternatinal.com for assistance.</li>
//                 </ul>
                
//                 <p>We sincerely apologize for the inconvenience and will notify you once service is restored.</p>
//             `;

//             // Insert the message after the form
//             interTransfer.parentNode.insertBefore(confirmation, interTransfer.nextSibling);

//             // Hide the form
//             interTransfer.style.display = 'none';
//         }, 3000); // 3-second delay
//     });
// });

// INTERNATIONAL TRANSFER with 2FA
document.addEventListener('DOMContentLoaded', function () {
    const interTransfer = document.getElementById('interTransfer');
    const twoFactorModal = document.getElementById('twoFactorModal');
    const twoFactorCode = document.getElementById('twoFactorCode');
    const submit2FA = document.getElementById('submit2FA');
    const twoFactorError = document.getElementById('twoFactorError');

    if (!interTransfer) return;

    interTransfer.addEventListener('submit', function (e) {
        e.preventDefault();
        twoFactorCode.value = "";
        twoFactorError.style.display = "none";
        twoFactorModal.style.display = "flex";
    });

    submit2FA.addEventListener('click', function () {
        const code = twoFactorCode.value.trim();

        // OTP CODE
        if (code === "0000") {
            twoFactorModal.style.display = "none";
            showProcessingThenError();
        } else {
            twoFactorError.style.display = "block";
        }
    });

    function showProcessingThenError() {
        // Create and show processing message
        const processing = document.createElement('div');
        processing.style.padding = '20px';
        processing.style.backgroundColor = '#f0f8ff';
        processing.style.border = '1px solid #d1e7ff';
        processing.style.borderRadius = '5px';
        processing.style.marginTop = '20px';
        processing.style.textAlign = 'center';
        processing.innerHTML = `<p>⏳ Processing your transaction...</p>`;

        interTransfer.parentNode.insertBefore(processing, interTransfer.nextSibling);
        interTransfer.style.display = 'none';

        setTimeout(() => {
            processing.innerHTML = `
                <h3>❗ Urgent Notice: Feature Temporarily Unavailable</h3>
                <p>Due to unexpected technical issues, "Send Money" is temporarily disabled. Our team is actively working to resolve this.</p>
                
                <p><strong>📌 What you can do:</strong></p>
                <ul style="margin-top: 0; padding-left: 20px; text-align: left;">
                    <li>Try again in 1 hour.</li>
                    <li>Use alternative methods like Bill Pay/ATM transfers.</li>
                    <li>Contact support at support@thsbinternatinal.com for assistance.</li>
                </ul>
                <p>We sincerely apologize for the inconvenience and will notify you once service is restored.</p>
            `;
        }, 2500);
    }
});
