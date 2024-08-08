console.log("order page")

function displayMsg() {
    const thankingDiv = document.getElementById('thanking');
    
    // Create new line of text
    const newLine = 'Thank you for the purchase';
    
    // Insert the new line into the thankingDiv
    thankingDiv.innerHTML = newLine;

      // Style the thanking message
      thankingDiv.style.backgroundColor = 'white';
      thankingDiv.style.fontSize = '18px';
      thankingDiv.style.padding = '5px';
      thankingDiv.style.fontFamily = 'arial';

    
    console.log("Thanking message displayed");
}

//  retrieve and display user input values

function displayUserInfo() {

    // Retrieve values 
    const email = document.getElementById("Email").value;
    const phone = document.getElementById("Phone").value;
    const username = document.getElementById("Username").value;
    const address = document.getElementById("address").value;
    const date = document.getElementById("date").value;

    //  values in the HTML elements
    
    document.getElementById("emailDisplay").innerHTML = email;
    document.getElementById("phoneDisplay").innerHTML = phone;
    document.getElementById("usernameDisplay").innerHTML = username;
    document.getElementById("Final-msg").innerHTML="Your date is "+address+date;
}

// Call the displayUserInfo and displayMsg functions
document.getElementById('display-button').addEventListener('click', function() {
    displayUserInfo();
    displayMsg();
});
