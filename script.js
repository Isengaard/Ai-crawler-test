// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {

  // Select the div with id 'message' (originally containing the static HTML content)
  const messageDiv = document.getElementById("message");
  
  // Replace the static content in 'message' div with new dynamic content
  messageDiv.textContent = "The Force is strong with this AI crawler! Welcome to the bright side.";

  // Select the empty div with id 'luke-quote'
  const lukeQuoteDiv = document.getElementById("luke-quote");

  // Inject a dynamic quote about Luke Skywalker into the 'luke-quote' div
  lukeQuoteDiv.textContent =
    '"Luke Skywalker is the everyman, the ordinary farm boy who dreams of adventure and becomes a hero. His journey is about hope, self-discovery, and the strength to confront fear." - George Lucas';
});
