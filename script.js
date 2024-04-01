// JavaScript for form validation

// Function to validate the contact form
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    // Check if name, email, and message are not empty
    if (name == "" || email == "" || message == "") {
        alert("Please fill in all fields");
        return false;
    }

    // Check if email is in a valid format
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false;
    }

    // If all validations pass, return true
    return true;
}
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  // Handle the form data (e.g., save to a database)
  console.log(formData);
  res.send('Form submitted successfully!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// JavaScript code
// JavaScript code
// JavaScript code
function addToCart(itemName, itemPrice, button) {
  // Show an alert with the item details
  const message = `Do you want to add ${itemName} to your cart for ${itemPrice}?`;
  const confirmed = confirm(message);

  // Check if the user confirmed
  if (confirmed) {
    // Perform further actions here, such as adding the item to a shopping cart
    // For demonstration purposes, let's log the item details
    console.log(`Added ${itemName} to cart. Price: ${itemPrice}`);

    // Get the message span next to the clicked button
    const addedToCartMsg = button.nextElementSibling;
    
    // Show the "+1 added to cart" message
    addedToCartMsg.style.display = 'inline';
    
    // Hide the message after 2 seconds
    setTimeout(function() {
      addedToCartMsg.style.display = 'none';
    }, 2000);
  }
}

