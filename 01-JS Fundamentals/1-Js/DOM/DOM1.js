let btn = document.getElementsByClassName("btn")[0];
console.log(btn);
let click = 0;

// Define the event handler function
function clickHandler(e) {
  console.log("Button clicked. Count:", click);
  click++;
  
  // Check if click count is less than 3
  if (click >= 3) {
    // Remove the event listener once click count reaches 3
    btn.removeEventListener("click", clickHandler);
    console.log("Event listener removed after 3 clicks.");
  }
}

// Add event listener using the named function as handler
btn.addEventListener("click", clickHandler);
