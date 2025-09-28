function SignUp(){

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("S-Email").value;
  let pass = document.getElementById("S-pass").value;

  let user = {
    name: name,
    email: email,
    password: pass
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let exists = users.some(u => u.email === email);
  if (exists) {
    alert("Email already registered!");
    return;
  }
  users.push(user);

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
        let currentUser = {
          name: validUser.name,
          email: validUser.email,
          balance:[],
          income:[],
          expense:[]
        }
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

    } else {
        alert("Invalid email or password!");
    }
    document.getElementById("loginForm").reset();
});

    
}