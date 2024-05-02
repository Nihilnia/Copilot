// Split the text content of the first <p> element into an array of words
const words = document.querySelector("p").innerText.split(" ");

// Map over each word in the array and wrap it in a <span> element
const spannedWords = words.map((word) => `<span>${word}</span>`);

// Replace the innerHTML of the first <p> element with the joined spannedWords array
document.querySelector("p").innerHTML = spannedWords.join(" ");

// Select all <span> elements on the page
const spans = document.querySelectorAll("span");

// Add event listeners to each <span> element for mouseover and mouseout events
spans.forEach((span) => {
  // Change the color of the span to red when mouseover event occurs
  span.addEventListener("mouseover", () => {
    span.style.color = "red";
  });

  // Reset the color of the span when mouseout event occurs
  span.addEventListener("mouseout", () => {
    span.style.color = "";
  });
});

// Initialize a variable to keep track of the hover count
let hoverCount = 0;

// Get the element with the id "hoverCount"
const hoverCountElement = document.getElementById("hoverCount");

// Select all <span> elements on the page again
const spanz = document.querySelectorAll("span");

// Add event listeners to each <span> element for mouseover and mouseout events
spanz.forEach((span) => {
  // Change the color of the span to red when mouseover event occurs
  span.addEventListener("mouseover", () => {
    span.style.color = "red";
    // Increment the hoverCount variable
    hoverCount++;
    // Update the text content of the hoverCountElement with the new hover count
    hoverCountElement.textContent = `Hover Count: ${hoverCount}`;
  });

  // Reset the color of the span when mouseout event occurs
  span.addEventListener("mouseout", () => {
    span.style.color = "";
  });
});

// Get the element with the id "darkModeButton"
const darkModeButton = document.getElementById("darkModeButton");

// Add a click event listener to the darkModeButton
darkModeButton.addEventListener("click", () => {
  // Toggle the "dark-mode" class on the body element
  document.body.classList.toggle("dark-mode");
});
