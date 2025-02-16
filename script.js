function validateLogin(){
    var usrnm = "rohit@gmail.com"
    var pass = "rohit123"

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if (username === usrnm && password === pass) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password");
    }

}