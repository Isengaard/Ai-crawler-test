document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  // Update the 'message' div dynamically
  const messageDiv = document.getElementById("message");
  if (messageDiv) {
    messageDiv.textContent = "The Force is strong with this AI crawler! Welcome to the bright side.";
    console.log("Updated message:", messageDiv.textContent);
  }

  // Update the 'luke-quote' div with a dynamic quote
  const lukeQuoteDiv = document.getElementById("luke-quote");
  if (lukeQuoteDiv) {
    lukeQuoteDiv.textContent =
      '"Luke Skywalker is the everyman, the ordinary farm boy who dreams of adventure and becomes a hero. His journey is about hope, self-discovery, and the strength to confront fear." - George Lucas';
    console.log("Injected Luke Skywalker quote:", lukeQuoteDiv.textContent);
  }

  // Dynamically change the image to Darth Vader
  const characterImage = document.getElementById("character-image");
  if (characterImage) {
    characterImage.src = "https://raw.githubusercontent.com/Isengaard/Ai-crawler-test/main/darth.jpg"; // Update image source to Darth Vader
    characterImage.alt = "Darth Vader"; // Update alt text to Darth Vader
    console.log("Updated image source to Darth Vader");
  }
});
