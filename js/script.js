document.addEventListener("DOMContentLoaded", function() {
  // select form
  document
    .getElementById("sign-up-form")

    .addEventListener("submit", function(event) {
      event.preventDefault();

      const inputBox = document.getElementById("your-email");
      console.log(inputBox.value);
      if (inputBox.value.length) {
        alert("Thank You!");
        inputBox.value = " ";
      } else {
        alert("Pleas enter a valid email");
      }
    });
});
