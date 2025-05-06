document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const stored = localStorage.getItem("registrations");
  const registrations = stored ? JSON.parse(stored) : [];

  const user = registrations.find((entry) => entry.email === email);
  const message = document.getElementById("message");

  if (user) {
    if (user.password === password) {
      localStorage.setItem("currentUserId", user.userId);
      message.textContent = "You have successfully logged in!";
      message.style.color = "green";
    } else {
      message.textContent = "Incorrect password.";
      message.style.color = "red";
    }
  } else {
    message.textContent = "Email not found. Please register.";
    message.style.color = "red";
  }
});
