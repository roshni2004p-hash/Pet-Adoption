// --- Signup ---
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");
  const adoptForm = document.getElementById("adoptForm");

  // SIGNUP FORM
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
      }

      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      alert("Signup successful!");
      document.cookie = `user=${name};path=/;max-age=86400`;
      window.location.href = "login.html";
    });
  }

  // LOGIN FORM
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && email === storedUser.email && password === storedUser.password) {
        alert(`Welcome back, ${storedUser.name}!`);
        document.cookie = `user=${storedUser.name};path=/;max-age=86400`;
        window.location.href = "adopt.html";
      } else {
        alert("Invalid credentials!");
      }
    });
  }

  // ADOPT FORM
  if (adoptForm) {
    adoptForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted successfully!");
      window.location.href = "thankyou.html";
    });
  }
});
