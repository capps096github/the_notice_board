// ?Auto Splash Function
function goToHome() {
  setTimeout(function () {
    location.href = "home.html";
  }, 1000);
}



// THis toggles to show the password
function togglePassword() {
  var passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}
