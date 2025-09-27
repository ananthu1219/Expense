function SignUp(){
// Sign Up Function
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form refresh

  let name = document.getElementById("name").value;
  let email = document.getElementById("S-Email").value;
  let pass = document.getElementById("S-pass").value;

  // create a user object
  let user = {
    name: name,
    email: email,
    password: pass
  };

  // check if users already exist in localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check if email already exists
  let exists = users.some(u => u.email === email);
  if (exists) {
    alert("Email already registered!");
    return;
  }

  // add new user to array
  users.push(user);

  // save back to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful!");
  document.getElementById("signupForm").reset();
});

}

function Login(){
    document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
    let email=document.getElementById('email').value
    let pass=document.getElementById('pass').value
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user => user.email === email && user.password === pass);

    if (validUser) {
        alert("Login successful! Welcome, " + validUser.name);
        window.location = "/home.html";

    } else {
        alert("Invalid email or password!");
    }

    document.getElementById("loginForm").reset();
});
    
}