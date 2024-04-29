document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Validation logic
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    // Here you can handle form submission, e.g., send data to server
    // For demonstration purpose, I'm just logging the data to console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form
    this.reset();
  });
