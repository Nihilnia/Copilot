// Get the acceptCookie button element
const acceptCookieButton = document.getElementById("acceptCookie");

// Add a click event listener to the button
acceptCookieButton.addEventListener("click", function () {
  // Create a cookie with the name "accepted" and value "yes"
  document.cookie = "accepted=yes";
});

// Function to show the cookie warning modal
function showCookieWarningModal() {
  const modal = document.getElementById("cookieWarningModal");

  // Create a new bootstrap Modal instance
  const myModal = new bootstrap.Modal(modal);

  // Show the modal
  myModal.show();
}

// Call the function to show the cookie warning modal
if (document.cookie.indexOf("accepted=yes") === -1) {
  showCookieWarningModal();
}
