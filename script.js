
function validateRegisterForm() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const msg = document.getElementById("regMsg");

  if (name.length < 3) {
    msg.textContent = "Name must be at least 3 characters.";
    return false;
  }
  if (!email.includes("@")) {
    msg.textContent = "Enter a valid email.";
    return false;
  }
  if (password.length < 6) {
    msg.textContent = "Password must be at least 6 characters.";
    return false;
  }
  msg.textContent = "Registration successful!";
  return false; // prevent actual submission for demo
}

function validateLoginForm() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const msg = document.getElementById("loginMsg");

  if (!email.includes("@")) {
    msg.textContent = "Enter a valid email.";
    return false;
  }
  if (password.length < 6) {
    msg.textContent = "Invalid password.";
    return false;
  }
  msg.textContent = "Login successful!";
  return false;
}

function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === "block" ? "none" : "block";
}

